// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.


const Aluno01 = 'Lucas'
const notaAluno01 = 9.8

const Aluno02 = 'Vieira'
const notaAluno02 = 2.5

const Aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
  console.log(`A nota foi de ${media}. Parabéns!`)
} else {
  console.log('A média é menor que 5')
}