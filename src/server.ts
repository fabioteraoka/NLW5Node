import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333,()=> console.log("server is running on port 3333")
)
// * GET = busca
// * POST = Criação 
// * PUT = Alteração
// * DELETE =  Apagar
// * PATCH = Alterar uma informação especifica

// comentado apos a criação dos repositories
// app.get("/", (req,res)=>{
//     // return res.send("Ola NLW 05")
//     return res.json({
//         message: "Ola NLW 05 JSON",
//     });
// })

// app.post("/",(req,res)=>{
//     return res.json({
//         message:"Usuário salvo com sucesso!"
//     });
// })