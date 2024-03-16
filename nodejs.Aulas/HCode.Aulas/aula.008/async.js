function sum(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x + 10);
    }, 3000);
  });
}

async function main() {
  try {
    const result = await sum(10.28);
    console.log(`Resultado: ${result}`);
  } catch (e) {
    console.log(`Erro na execução: ${e}`);
  }
}

main();
