const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use( express.static( "public" ) );

const rota = require("./routes/rota");

app.use("/", rota);

app.get("/teste", (req, res)=>res.send("Deu certo"));

app.listen(80, ()=> console.log("Servidor Rodando na porta 80"));