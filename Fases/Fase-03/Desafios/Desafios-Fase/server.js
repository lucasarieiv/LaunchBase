const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")
const teachers = require('./teachers')

const server = express();

server.use(express.urlencoded({ extended: true }))
server.use(express.static("public"))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5000, ()=> {
  console.log('Server running https://localhost:5000')
})