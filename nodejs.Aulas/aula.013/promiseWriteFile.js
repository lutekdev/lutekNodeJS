const { writeFile } = require("fs");

function makeFile(name, content) {
  return new Promise((res, rej) => {
    writeFile(name, content, (err) => {
      if (err) return rej(err);
      res();
    });
  });
}

makeFile("promiseArquivo.txt", "- Hello World")
  .then(() => {
    console.log("Arquivo criado com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });
