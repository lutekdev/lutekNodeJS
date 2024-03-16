const { promisify } = require("util");
const fs = require("fs");

const writeFile = promisify(fs.writeFile);
const heading = "Hello, World!";

writeFile("test.txt", heading).then((data) => {
  if (data) {
    console.log("Arquivo Criado com Sucesso!");
  } else {
    console.log("Arquivo já está criado!");
  }
});
