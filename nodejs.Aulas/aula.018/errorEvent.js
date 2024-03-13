const { EventEmitter } = require("events");
const emitter = new EventEmitter();

const validateObjet = (a) => {
  if (typeof a !== "object") {
    emitter.emit("error", new Error("Objeto inválido"));
  } else {
    console.log(`Objeto Valido: ${a.name} - ${a.course}`);
  }
};

emitter.addListener("error", (err) => {
  console.log(`Erro: ${err.message}`);
});

let dados = { name: "OliveiraWinicius", course: "NodeJS" };
validateObjet(dados);
