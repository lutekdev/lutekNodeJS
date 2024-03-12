function soma(x, callback) {
  setTimeout(() => {
    return callback(null, x + 2);
  }, 3000);
}

function resolve(e, r) {
  if (e) throw e;
  console.log(r);
}

soma(100, resolve);
