const { writeFile } = require("fs");
const fs = require("fs");

function makeFile(fileName) {
  writeFile(fileName, "Hello, World!", (err, data) => {
    if (err) throw err;
    console.log("Arquivo Criado com Sucesso!");
  });
}

function readFile(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    if (data) {
      if (data.toString().length === 0) {
        console.log(`O ${fileName} está vazio.`);
      } else {
        console.log(data.toString());
      }
    }
  });
}

function checkFileExist(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (data) {
      readFile(fileName);
    } else {
      makeFile(fileName);
    }
  });
}

checkFileExist("test.txt");
