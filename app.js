import express from "express";
import mainRoutes from "./routes/main.routes.js";
import servicesRoutes from "./routes/services.route.js"
import contactRoutes from "./routes/contact.routes.js"
import formRoutes from "./routes/form.routes.js"
import automationsRoutes from "./routes/automations.routes.js"
import Mailjet from "node-mailjet";
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT || 3000;



const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));
app.use(express.json());


//Routes
app.use("/", mainRoutes);
app.use("/services", servicesRoutes);
app.use("/contact", contactRoutes);
app.use("/form", formRoutes);
app.use("/automations", automationsRoutes);


// Connexion Mailjet
const mailjet = Mailjet.apiConnect(
    process.env.MJ_API_KEY,
    process.env.MJ_API_SECRET
);

// Route du formulaire
app.post("/form", async (req, res) => {
    const { civilite, nom, prenom, email, telephone, origine, message } = req.body;

    try {
        // 1. Ajouter le contact dans une liste Mailjet
        await mailjet
            .post("contactslist", { version: "v3" })
            .id(YOUR_LIST_ID) // remplace par l’ID de ta liste
            .action("managecontact")
            .request({
                Email: email,
                Name: `${prenom} ${nom}`,
                Action: "addnoforce"
            });

        // 2. Envoyer un email interne avec les infos du formulaire (optionnel)
        await mailjet
            .post("send", { version: "v3.1" })
            .request({
                Messages: [
                    {
                        From: { Email: "toddrichard87@hotmail.com", Name: "Peter Macé" },
                        To: [{ Email: email, Name: `${prenom} ${nom}` }],
                        Subject: "Merci pour votre demande",
                        TextPart: `
Bonjour ${civilite} ${nom},

Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.

Rappel de votre message :
${message}

Cordialement,
Ton entreprise
        `,
                        HTMLPart: `
          <h2>Merci pour votre demande</h2>
          <p>Bonjour <strong>${civilite} ${nom}</strong>,</p>
          <p>Nous avons bien reçu votre message et nous reviendrons vers vous rapidement.</p>
          <p><strong>Votre message :</strong><br>${message}</p>
          <p>Cordialement,<br>Ton entreprise</p>
        `
                    }
                ]
            });
        res.send("Formulaire envoyé !");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de l’envoi.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;