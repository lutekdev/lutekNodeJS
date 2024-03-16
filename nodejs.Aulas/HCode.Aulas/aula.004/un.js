const fs = require("fs");

// EVITE DE USAR MÉTODOS BLOQUEANTES COM MÉTODOS NÃO BLOQUEANTES, SE VOCÊ MONTAR UM CÓDIGO COM MÉTODOS BLOQUEANTES NÃO USE NÃO BLOQUEANTES.

// CASO VOCÊ MONTAR UM CÓDIGO COM MÉTODO NÃO BLOQUEANTES NÃO USE MÉTODOS BLOQUEANTES.

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data);

  fs.unlink("file.txt", (err) => {
    if (err) throw err;
    console.log("Arquivo deletado com sucesso!");
  });
});
