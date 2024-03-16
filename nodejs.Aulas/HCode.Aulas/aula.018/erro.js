// TENTE EXECUTAR ALGUMA COISA, SE DER ERRO EXECUTE O CATCH AUTOMATICAMENTE.

function execute() {
  executeTo();
}

function executeTo() {
  throw new Error("Ah não, deu erro! Não deu!");
}

function init() {
  try {
    execute();
  } catch (err) {
    console.log(err.message);
  }
}

init();

console.log("Programa finalizado!");
