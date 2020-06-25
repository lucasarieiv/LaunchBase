const alunos = [
  {
    nome: "Lucas",
    nota: 1.8
  },
  {
    nome: "Pedro",
    nota: 10
  },
  {
    nome: "Gabriel",
    nota: 8
  },
  {
    nome: "Carlos",
    nota: 10
  }
]

// const alunosTurmaB = [
//   {
//     nome: "Clayton",
//     nota: 2
//   },
//   {
//     nome: "Robson",
//     nota: 5
//   },
//   {
//     nome: "João",
//     nota: 7.5
//   },
//   {
//     nome: "João de Beta",
//     nota: 7
//   }
// ]

function calculaMedia() {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
   
  const media = soma / alunos.length
  return media
}

const media1 = calculaMedia()

console.log(media1)

// const media2 = calculaMedia(alunosTurmaB)

// function enviaMensagem(media, turma) {
//   if (media > 5) {
//     console.log(`A media da ${turma} foi de ${media}. Parabéns`)
//   } else {
//     console.log(`A media da ${turma} é menor que 5`)
//   }
// }

// enviaMensagem(media1, 'turmaA')
// enviaMensagem(media2, 'turmaB')

