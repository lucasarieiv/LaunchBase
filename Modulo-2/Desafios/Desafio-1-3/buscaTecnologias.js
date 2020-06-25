const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"]},
  { nome: "Gabriel", tecnologias: ["Javascript", "CSS", "C++"]},
  { nome: "João", tecnologias: ["HTML", "Node.js"]}
]

function checaSeUsuarioUsaCss(usuario) {
  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === "CSS") {
      return true
    }
  }
  return false
}

for (let i = 0; i < usuarios.length; i++) {
  let usuarioTrabalhaComCSS = checaSeUsuarioUsaCss(usuarios[i]);
  
  if (usuarioTrabalhaComCSS) {
    console.log(`O Usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}