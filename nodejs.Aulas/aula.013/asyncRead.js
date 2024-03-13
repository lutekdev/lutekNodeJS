const fs = require("fs").promises;

async function readFile(fileName) {
  try {
    const data = await fs.readFile(fileName);
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}

async function readBuffer(fileName) {
  const data = await fs.readFile(fileName, "binary");
  return new Buffer.from(data);
}

// readFile("promiseArquivo.txt");
try {
  readBuffer("promiseArquivo.txt").then((data) => console.log(data.toString()));
} catch (err) {
  console.log(err);
}
