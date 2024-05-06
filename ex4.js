// const alunos = []

// const calcular = ({ nota1, nota2, nota3, nota4 }) => [nota1, nota2, nota3, nota4].reduce((total, nota) => total + nota) / 4;

// for (let i = 0; i <= 3; i++) {
//   const aluno = {
//     nome: prompt('NOME: '),
//     nota1: Number(prompt('NOTA 1:')),
//     nota2: Number(prompt('NOTA 2:')),
//     nota3: Number(prompt('NOTA 3:')),
//     nota4: Number(prompt('NOTA 4:')),
//   };

//   alunos.push(aluno);
//   console.log(`${aluno.nome} ${calcular(aluno)}`);
// }


alert("Informe as notas de 0 á 10")
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(media)

if (media >= 7) {
    console.log("Aprovado")
}
else if (media < 7 && media >= 5){
  console.log("Recuperação")
}
else{
  console.log("Reprovado")
}