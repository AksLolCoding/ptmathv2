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

app.get("/events", (req, res) => {
    res.sendFile(`${__dirname}/public/events.html`);
});

app.get("/calendar", (req, res) => {
    res.sendFile(`${__dirname}/public/calendar.html`);
});

app.get("/news", (req, res) => {
    res.sendFile(`${__dirname}/public/news.html`);
});

app.get("/resources", (req, res) => {
    res.sendFile(`${__dirname}/public/resources.html`);
});

app.get("/team", (req, res) => {
    res.sendFile(`${__dirname}/public/team.html`);
});

app.use((req, res, next) => {
    res.status(404).sendFile(`${__dirname}/public/error-404.html`);
});

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log("Port 3000");
});