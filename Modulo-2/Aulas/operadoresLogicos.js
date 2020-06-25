/*
  OPERADORES LÓGICOS

  && "E" As duas condições devem ser verdadeiras
  para que a condição final seja verdadeira.

  || "OU" Uma das condições devem ser verdadeira
  para que a condição final seja verdadeira.

  ! "NÃO" Nega uma condição
*/

console.log(5 == 5 && 6 == 6) // True
console.log(5 == 5 && 6 != 6) // False

console.log(5 != 5 || 6 == 6) // True
console.log(5 == 5 || 6 != 6) // True

console.log(!(5 > 6)) // True
console.log(!(5 < 6)) // False