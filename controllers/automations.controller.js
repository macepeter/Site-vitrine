import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function automationsPages(req, res) {
        
        const folderPath = path.join(__dirname, "../public/img");

        const images = fs.readdirSync(folderPath)
                .filter(file => file.match(/\.(jpg|jpeg|png|webp|gif)$/i))
                .map(file => `/img/${file}`);

        
        res.render('automations', { images });
}

