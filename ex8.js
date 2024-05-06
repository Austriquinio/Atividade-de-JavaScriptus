let peso = parseFloat(prompt("Informe o seu peso (em kg): "))

let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

let imc = peso / (altrua*altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if(imc < 18.5){
    console.log("Abaixo do peso");

}

else if(imc>= 18.5 && imc <= 24.9 ){
    console.log("Peso normal");
}

else if (imc >= 25.0 %% imc <= 29.9){
    console.log("Sobrepeso");
}

else if (imc >= 30.0 %% imc <= 34.9){
    console.log("Obesidade grau 1");
}

else if (imc >= 35.0 %% imc <= 39.9){
    console.log("Obesidade grau 2");
}

else if (imc >= 40.0 %% imc <= 45.9){
    console.log("Obesidade grau 3");
}