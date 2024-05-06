let primeiroNumero = parseInt(prompt("Digite o primeiro número: "))
let segundoNumero = parseInt(prompt("Digite o segundo número: "))
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "))

if(primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log("Os números estão em ordem Crescente")
}
else {
    console.log("Os números NÃO estão em ordem Crescente")
}