// Blocking

const fs = require("fs");

/**
 * CÓDIGO PARA CRIAR VARIAS LINHAS NO ARQUIVO TXT
 *
 * for /L %i in (1,1,24) do type file.txt >> file.txt
 * Arquivo criado com sucesso.
 */

const timestamp = (process.hrtime()[0] / 60).toFixed(5);
console.log(`Antes De Criar o Arquivo TXT em ${timestamp}`);

const dados = fs.readFileSync("file.txt");
console.log(`Terminei a leitura do arquivo em ${timestamp}`);
