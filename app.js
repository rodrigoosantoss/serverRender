//carregando modulos
const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()
const PORT = 8080
const admin = require('./routes/admin')
const path = require('path')

const mysql = require('mysql')

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_produtos"
})

conexao.connect()

const sql = "SELECT * FROM produto";
// variavel = "1"
let data
conexao.query(sql, function(err, resultado){
    if(err) throw err
    data = JSON.stringify(resultado)
    console.log("Dados query = ", data)
})

//COMANDO QUE IRÁ GERAR A AÇÃO
conexao.query(sql)
console.log("Dados final: ", data)
conexao.end()

//configuraçoes
    //bodyParser
    app.use(express.urlencoded({ extended: true}))
    app.use(express.json())
    //Handlebars
    // app.engine('exphbs', Handlebars({defaultLayout: 'main'}))
    // app.set('view engine', 'exphbs')

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    mysql

    //mysql

    //Path Pegando caminho absoluto com dirname
    app.use(express.static(path.join(__dirname, "public")))


//Rotas
    app.use('/admin', admin)


app.listen(PORT, () => {
    console.log('Serviço no ar!!')
})

module.exports = app