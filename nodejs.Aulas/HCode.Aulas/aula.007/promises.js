function soma(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x + 10);
    }, 3000);
  });
}

soma(10.58)
  .then((r) => {
    console.log(`Foi Resolvido: ${r}`);
  })
  .catch((e) => {
    console.log(`Foi Rejeitado: ${e}`);
  });
