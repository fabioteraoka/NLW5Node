import express from "express"; // importando o express do express
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"; // modulo do Node para construir um caminho

import { routes } from "./routes";

import "./database";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html"); // verificar pois na aula estava com html

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); // criando Protocolo de http
const io = new Server(http); // criando o protocolo WS

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };
