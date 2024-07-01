/** 
* Regra de 3
* @author Edson Cicero
*/


const input = require('readline-sync')
console.clear()
console.log("Calculo do Valor da porcentagem")
console.log("X% de Y = valor")

//variaveis
let x,y, valor

//entrada
x = Number(input.question('Digite o valor de X: '))
y = Number(input.question('Digite o valor de Y: '))


//Processamento
valor = (x * y)/100

//Saida
console.log(`${x}% de ${y} = ${valor.toFixed(2)} `) 






