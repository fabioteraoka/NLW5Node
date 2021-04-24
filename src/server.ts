import { http } from './http';
import './websocket/client';
import './websocket/admin';

// comando para colocar o heroku
var porta = process.env.PORT || 8080;
server.listen(porta, () => console.log('rodando'));
// http.listen(3333, () => console.log('Server started on 3333'));
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