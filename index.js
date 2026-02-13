import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { createRequire } from "module"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

//sends error-404.html when the user gets a 404 error
app.use((req, res, next) => {
    res.status(404).sendFile(`${__dirname}/public/error-404.html`);
});

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log("Port 3000");
});