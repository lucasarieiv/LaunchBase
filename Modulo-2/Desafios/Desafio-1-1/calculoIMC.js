const { toInteger } = require("lodash");

const nome = "Lucas";
const peso = 64;
const altura = 1.75

const imc = peso / (altura * altura);
console.log(`O Seu IMC é ${toInteger(imc)}`)

if (imc >= 30) {
  console.log(`${nome} você está acima do peso`)
} else {
  console.log(`${nome} você não está acima do peso`)
}