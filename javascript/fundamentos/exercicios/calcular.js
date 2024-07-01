/** 
* Calcular a área e o perímetro de um retângulo
* @author Edson Cicero
*/

//variaveis
let base, altura, perimetro

const input = require('readline-sync')

console.clear()
console.log("Calcular a área de um Retangulo")


//entrada
base = Number(input.question('Total Base: '))
altura = Number(input.question('Total Altura: '))
perimetro = (base + altura) *2;

//Processamento50
area = base * altura

//Saida
console.log('Total Area: ', area);
console.log(`Total Perimetro: ${perimetro.toFixed()}`)

