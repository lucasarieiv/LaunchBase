const nome = "Maria";
const sexo = "M";
const idade = 50;
const constribuicao = 35;
const contribuicaoMinima = constribuicao + idade

if (sexo === 'M') {
  if (constribuicao >= 35 && contribuicaoMinima >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
} else {
  if (constribuicao >= 30 && contribuicaoMinima >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
  }
  else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}
