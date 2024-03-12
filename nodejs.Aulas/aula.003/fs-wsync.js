// No-Blocking
const fs = require("fs");

/**
 * CÓDIGO PARA CRIAR VARIAS LINHAS NO ARQUIVO TXT
 *
 * for /L %i in (1,1,24) do type file.txt >> file.txt
 * Arquivo criado com sucesso.
 */
const timestamp = (process.hrtime()[0] / 60).toFixed(5);

console.log(`Antes de Ler o arquivo TXT em ${timestamp}`);

const dados = fs.readFile("file.txt", (err, data) => {
  const fileSize = data ? data.length : 0;
  const fileSizeKB = (fileSize / 1024).toFixed(3);
  const timestampMin = parseFloat(timestamp);
  const fileSizePerMin = (fileSizeKB / timestampMin).toFixed(3);

  console.log(`Tamanho do arquivo: ${fileSizeKB} KB`);

  if (err) throw err;
  if (data) console.log(`Velocidade de escrita: ${fileSizePerMin} KB/min`);
});
