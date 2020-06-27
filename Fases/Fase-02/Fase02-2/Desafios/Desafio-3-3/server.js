const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

const courses = require('./data')

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  return res.render("courses", {courses})
})

server.get('/about', function(req, res) {
  return res.render("about")
})

server.get('/courses/:id', function(req, res) {
  const id = req.params.id

  const course = courses.find(function(course) {
    return course.id == id
  })

  if (!course) {
    return res.send('Course not Found')
  }

  return res.render('course', { course })
})

server.use(function(req, res) {
  res.status(404).render("not-found");
})


server.listen("5000", function() {
  console.log('Servidor Rodando na porta 5000')
})