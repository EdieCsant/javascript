/** 
* Calculo do valor do desconto
* @author Edson Cicero
*/

// Variaveis
let total, desconto, valor, totalDesconto

const input = require('readline-sync')

console.clear()
console.log("Calcular o valor do desconto")

//entrada
total = Number(input.question('Digite o valor total: '))
desconto = Number(input.question('Digite o valor do Desconto em %: '))

//processamento 1
 valor = (desconto * totalDesconto) /100

 //saida 1
 console.log("_________________")
 console.log(`Valor total: R$ ${total.toFixed(2)}`)
 console.log(`Desconto: ${desconto}%`)
 console.log(`Valor do desconto: R$ ${total.toFixed(2)}`)

 //processamento
 totalDesconto = total - valor

 //saida 2
 console.log(`Total Desconto: R$ ${totalDesconto.toFixed(2)}`)




