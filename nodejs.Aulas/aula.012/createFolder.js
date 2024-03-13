const fs = require("fs");
const assetsDir = ["img", "js", "css"];

function make(dir) {
  dir.forEach((item) => {
    // RECURSIVE SERVE PARA CRIAR PASTA MESMO QUE ELAS NÃO EXISTAM AINDA.
    fs.mkdir(`assets/${item}`, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`- Criando Pasta de Nome: ${item}`);
    });
  });
}

function checkFolder() {
  fs.readdir("assets", (err, data) => {
    if (data) {
      console.log(
        "- Hey, acho que você está equivocado, essa pasta já existe!!"
      );
    } else {
      make(assetsDir);
    }
  });
}

checkFolder();
