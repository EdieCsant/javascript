/**
 * Estudo das Variáveis - tipagem dinâmica
 * @author Edson Cicero Santos
*/

console.clear()
console.log("strings___________________")
let nome = "Edson Cicero"
console.log(typeof(nome)) // tipo de variavel
console.log(nome)
//concatenação (unir um texto com o conteudo de uma variável)
console.log("professor: " + nome) // evitar concatenar desta forma
console.log(`Professor: ${nome}`)
console.log("numeros__________________")
let peso = 62
let altura = "cd"
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) // toFixed arredonda as casas decimais
//casas decimais
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos____________________")
let chevesw = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)




