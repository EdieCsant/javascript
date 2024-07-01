/** 
* Converter Moeda (Real - Euro)
* @author Edson Cicero
*/

const input = require('readline-sync')

let moedaReal, moedaEuro, total

console.clear()
console.log("Converter a Moeda")

//Entrada
moedaReal = Number(input.question('Digite o valor em Real: '))
moedaEuro + Number(input.question('Digite o valor em Euro: '))

//processamento

total = moedaReal / moedaEuro

//saida
console.log(`R$ ${moedaReal.toFixed(2)} convertido para euro = E$ ${total.toFixed(2)} euros`)