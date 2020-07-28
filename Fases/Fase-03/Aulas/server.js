const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")

const server = express();

server.use(express.urlencoded({ extended: true })) // Vai ultilizar a biblioteca QS (permite aninhamento de objetos nested objects) 
server.use(express.static("public")) // Seta arquivos Statics para a pasta public
server.use(routes) // Usando o arquivo routes

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5000, ()=> {
  console.log('Server running https://localhost:5000')
})
