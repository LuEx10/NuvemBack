require("dotenv").config();
//teste2push2345*dnbcdcaslacdtessedd
const { json } = require("express");
const express = require("express");
const cors = require("cors")
const app = express();

const bd = require("./database")

app.use(express.json());

app.post("/login", async (req, res) => {
    console.log("chegou lgoin");
    const dado = req.body;
    const corpo = await bd.selectUsuario(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  /// mudar o envio do int do id para string
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/cadastro", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.insertUsuario(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.status(200).send();
    }
    else{   
        res.set('Content-Type', 'application/json');
        res.status(204);
        res.send(JSON.stringify("Cadastro falhou"));
    }
})

app.get("/recuperarNome/:email", async (req, res) => {
    const email = req.params.email;
    const corpo = await bd.selectEmail(email);
    if (corpo != null){        
        res.set('Content-Type', 'application/json');
        res.status(200).send(corpo);
    }
    else{   
        res.set('Content-Type', 'application/json');
        res.status(204);
        res.send(JSON.stringify("Cadastro falhou"));
    }
})


app.post("/update", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.updateUsuario(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.status(200).send();
    }
    else{   
        res.set('Content-Type', 'application/json');
        res.status(204);
        res.send(JSON.stringify("Atualização cadastral falhou"));
    }
})

app.post("/updateSenha", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.updateSenha(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.status(200).send();
    }
    else{   
        res.set('Content-Type', 'application/json');
        res.status(204);
        res.send(JSON.stringify("Atualização cadastral falhou"));
    }
})

app.post("/receita/cadastro", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.insertReceita(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/receita/update", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.updateReceita(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/receita/read/:id_receitas", async (req, res) => {
    const id_receitas = req.params.id_receitas;
    const corpo = await bd.selectReceita(id_receitas);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/receita/usuario/read/:id_usuario", async (req, res) => {
    const id_usuario = req.params.id_usuario;
    const corpo = await bd.selectAllReceitaUsuario(id_usuario);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/receita/delete", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.deleteReceita(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/receita/read/all", async (req, res) => {
    const corpo = await bd.selectAllReceita();
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/avaliacao/cadastro", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.insertAvaliacao(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/avaliacao/read", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.selectAvaliacao(dado);
    console.log(corpo)
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/avaliacao/all/read", async (req, res) => {
    const corpo = await bd.selectAllAvaliacao();
    console.log(corpo)
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/avaliacao/usuario/read", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.selectAvaliacaoUsuario(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

///mandar 'string' e 'nota'
app.post("/filtro/read", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.selectFiltro(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/curtida/cadastro", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.insertCurtida(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/curtida/read/:id_usuario/:id_receitas", async (req, res) => {
    const id_usuario = req.params.id_usuario;
    const id_receitas = req.params.id_receitas;
    const corpo = await bd.selectCurtida(id_usuario, id_receitas);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/curtida/all/read/:id_usuario", async (req, res) => {
    const id_usuario = req.params.id_usuario;
    const corpo = await bd.selectAllCurtida(id_usuario);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/curtida/count/:id_receitas", async (req, res) => {
    const id_receitas = req.params.id_receitas;
    const corpo = await bd.countCurtida(id_receitas);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.post("/comentario/cadastro", async (req, res) => {
    const dado = req.body;
    const corpo = await bd.insertComentario(dado);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.get("/comentario/read/:id_receitas", async (req, res) => {
    const id_receitas = req.params.id_receitas;
    const corpo = await bd.selectAllComentario(id_receitas);
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

//retorna todos os restaurantes
app.get("/restaurantes/all/read", async (req, res) => {
    const corpo = await bd.selectAllRestaurantes();
    if (corpo != null){
        res.set('Content-Type', 'application/json');
        res.send(corpo).status(200);  
    }
    else{
        res.set('Content-Type', 'application/json');
        res.status(204).send();        
    }    
})

app.use(cors({
    origin: "*"
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(process.env.PORT, () => {
    console.log("O bagulho ta legal");
})

