// Chamando a função alert
//aler("Hello World")

// Chamando o método log()
//console.log("Hello Leronni")

// Declaração da função - Ensinando o computador
//function bemVindo() {
//    console.log("Bem Vindo " + nome);
//} 

// Chamada da função
//bemVindo("Leronni")

//function somar(num1, num2) {
//    return num1 + num2;
//}

let resultado = somar(6, -5)

function mostrarSituacaoAluno() {
    let nota1 = parseInt(prompt("Digite a primeira nota: "))
    let nota2 = parseInt(prompt("Digite a segunda nota: "))
    let nota3 = parseInt(prompt("Digite a terceira nota: "))

    let somaNotas = nota1 + nota2 + nota3;

    let media = somaNotas / 3;

    console.log(media);


}