export function servicesRoutes(req, res) {
    const solutions = [
    { icon: "💡", title: "Installation d'équipements connectés", desc: "Installation d'appareils intelligents : ampoules, capteurs, caméras…" },
    { icon: "⚙️", title: "Automatisations personnalisées", desc: "Création de scénarios adaptés à votre quotidien." },
    { icon: "🌱", title: "Optimisation énergétique", desc: "Réduisez votre consommation grâce à des automatisations intelligentes." },
    { icon: "🔒", title: "Sécurisation de la maison", desc: "Surveillance, alertes, simulation de présence…" }
];

    res.render("services", { solutions });

}

