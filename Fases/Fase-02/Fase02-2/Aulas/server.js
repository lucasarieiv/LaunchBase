const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'))

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get('/', (req, res)=> {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/32067321?s=460&u=bc37d58fc3718c6cf1db2164dc1725400803a515&v=4",
    name: "Lucas Vieira",
    role: "Desenvolvedor Front-end",
    description: 'Estudante de Desenvolvimento Web. Apaixonado por Javascript, Front-end e Design. Acompanhe meu desenvolvimento no <a href="https://github.com/lucasarieiv" target="_blank">Github</a>',
    links: [
      { name: "Github", url: "https://github.com/lucasarieiv"},
      { name: "Twitter", url: "https://twitter.com/lucas_arieiv"},
      { name: "Linkedin", url: "https://www.linkedin.com/in/lucas-v-dev/"}
    ]
  }

  return res.render("about", { about })
})

server.get('/portfolio', (req, res)=> {
  return res.render("portfolio", { items: videos })
})


server.listen(5000, ()=> {
  console.log('Server running https://localhost:5000')
})
