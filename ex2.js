let dia_semana = prompt("Informe um número de 1 a 7: ")

switch (dia_semana){

    case "1":
        console.log("segunda-feira")
        break;

    case "2":
        console.log("terça-feira")
        break;
        
    case "3":
        console.log("quarta-feira")
        break;

    case "4":
        console.log("quinta-feira")
        break;
        
    case "5":
        console.log("sexta-feira")
        break;
    
    case "6":
        console.log("sábado")
        break;
        
    case "7":
        console.log("domingo")
        break;

    default:
        console.log("O número informado não é válido")
        break;

}