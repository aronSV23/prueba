import fs from "node:fs/promises"
import {pool} from "./db.js";

export const inicio = async (req, res) => {
    res.writeHead(200,  { 'content-type': 'text/html; charset="utf-8"' });

    const html = await fs.readFile("./html/inicio.html", "utf-8");

    res.end(html);
}

export const datos = async (req, res) => {
    const data = await pool.query("SELECT * FROM users");

    res.writeHead(200, { 'content-type': 'application/json; charset="utf-8"' });
    res.end(JSON.stringify(data[0]));
}

export const notFound = async (req, res) => {
    res.writeHead(200,  { 'content-type': 'text/html; charset="utf-8"' });
    res.end("<h1>Not found</h1>");
}