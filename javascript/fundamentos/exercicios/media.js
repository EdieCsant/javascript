/***
 * Cãlculo da média de 2 notas
 * @author Edson Santos
 */
// importar o pacote readline-sync ( input no console)
const input = require('readline-sync')

// variaveis
let nota1, nota2, media

console.clear()
console.log("Calculo da média")
//  captura da nota pelo pacote readline-sync
// entrada 
nota1 = Number(input.question("Digite a nota1: "))
nota2 = Number(input.question("Digite a nota2: "))
media = (nota1 + nota2) /2;
console.log(`Media ${media.toFixed(1)}`)