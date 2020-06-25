const alunosTurmaA = [
  {
    nome: "Lucas",
    nota: 10,
  },
  {
    nome: "Pedro",
    nota: 10,
  },
  {
    nome: "Gabriel",
    nota: 10,
  },
];

const alunosTurmaB = [
  {
    nome: "Clayton",
    nota: 2,
  },
  {
    nome: "Robson",
    nota: 5,
  },
  {
    nome: "João",
    nota: 7.5,
  },
];

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

console.log(media1);
console.log(media2);

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A media da ${turma} é menor que 5`);
  }
}

enviaMensagem(media1, "turmaA");
enviaMensagem(media2, "turmaB");
