import { http } from './http';
import './websocket/client';

http.listen(3333, () => console.log('Server started on 3333'));
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