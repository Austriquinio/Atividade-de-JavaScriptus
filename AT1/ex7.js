let valorTotal = parseFloat(prompt("Informe o valor toltal da compra: "))

let desconto; 

if (valor <= 100){
    desconto = 0
    console.log("O valor de desconto foi: " + desconto) 
}
else if(valorTotal <= 200) {
    desconto = 0.1;
    console.log("O valor de desconto foi de: " + (deconto*100)+"%")
}else{
    desconto = 0.2;
    console.log("O valor de desconto foi de: " + (deconto*100)+"%")
}

 let valorFinal = valorTotal - (valorTotal*desconto)

 console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2));