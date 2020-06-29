const express = require('express');
const nunjucks = require('nunjucks');

const server = express()

const receitas = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  return res.render('home', { receitas })
})

server.get("/sobre", function(req, res) {
  return res.render('sobre')
})

server.get("/receitas", function(req, res) {
  return res.render('receitas', {receitas})
})

server.get("/receita/:title", function(req, res) {
  const title = req.params.title;

  const receita = receitas.find(receita => receita.title == title)
  
  if (!receita) {
    return res.send('Recipe not Found ')
  }

  return res.render('receita', { receita })
})

server.use(function(req, res) {
  res.status(404).render('not-found')
})


server.listen(5000, function() {
  console.log('http://localhost:5000')
})