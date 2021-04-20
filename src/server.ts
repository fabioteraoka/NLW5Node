import express from "express";

const app = express();

app.listen(3333,()=> console.log("server is running on port 3333")
)

// * GET = busca
// * POST = Criação 
// * PUT = Alteração
// * DELETE =  Apagar
// * PATCH = Alterar uma informação especifica

app.get("/", (req,res)=>{
    // return res.send("Ola NLW 05")
    return res.json({
        message: "Ola NLW 05 JSON",
    });
})

app.post("/",(req,res)=>{
    return res.json({
        message:"Usuário salvo com sucesso!"
    });
})