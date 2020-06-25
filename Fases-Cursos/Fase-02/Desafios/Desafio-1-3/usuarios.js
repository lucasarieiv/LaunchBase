const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"]},
  { nome: "Gabriel", tecnologias: ["Javascript", "CSS", "C++"]},
  { nome: "João", tecnologias: ["HTML", "Node.js"]}
]

for (let i = 0; i < usuarios.length; i++) {
  let tecnologias = []

  for (let index = 0; index < usuarios[i].tecnologias.length; index++) {
    tecnologias += `${usuarios[i].tecnologias[index]} `
  }
  console.log(`${usuarios[i].nome} trabalha com ${tecnologias}`)
}