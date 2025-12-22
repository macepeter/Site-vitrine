import express from "express";
import mainRoutes from "./routes/main.routes.js";
import servicesRoutes from "./routes/services.route.js"
import contactRoutes from "./routes/contact.routes.js"

const PORT = process.env.PORT || 3000;



const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));

//Routes
app.use("/", mainRoutes);
app.use("/services", servicesRoutes);
app.use("/contact", contactRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;