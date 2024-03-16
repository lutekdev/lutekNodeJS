// API DE CONSOLE
console.log("Exibindo uma mensagem no console");

// ERRO
// console.log(new Error(`Exibindo mensagem de erro!`));

const carros = ["Gol", "Palio", "Uno"];

console.table(carros);

console.count("Processo");
console.count("Processo");
console.count("Processo");
console.count("Processo");

console.log("Zerando o Processo");
console.countReset("Processo");

console.count("Processo");

// ANALISANDO MEMORIA

console.time("Contador");
console.timeEnd("Contador");

// LIMPA O CONSOLE
console.clear();
