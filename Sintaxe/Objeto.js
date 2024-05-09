let pessoa1 = {
    nome: "Leronni",
    apelido: "Leron"
}

let pessoa2 = {
    nome: "Adam",
    apelido: "Snowinte"
}

let pessoa3 = {
    nome: "Vivian",
    apelido: "Vivi"
}

let produto = {
    nomeProduto: "Xadrez"
    preco: 20.90
    decricao: "Jogo de xadrez feito com madeira pura e base à imã."
    marca: "ExNebulas"
}

console.log(produto.preco + " " + produto.descricao);

console.log("Olá Adam, aumente o seu nível de estratégia, jogando xadrez")

console.log(`Olá ${pessoa.nome}, ${produto.descricao}, utilizando a ${produto.marca}`)

let produtoCadastrado = {
    nome: "",
    valor: "",
    marca: "",
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
