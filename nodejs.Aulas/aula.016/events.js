const { EventEmitter } = require("events");

class Evento extends EventEmitter {}
const myEvent = new Evento();

// ON CRIA O EVENTO - SUBSCRIBER - ASSINANTE
myEvent.on("segurança", (x, y) => {
  console.log(`Segurança: ${x} + ${y} = ${x + y}`);
});

// PARA CHAMAR é EMIT - PUBLISHER - ELE VERIFICA SE ALGUÉM ESTÁ CHAMANDO O SUBSCRIBER
myEvent.emit("segurança", 10, 20);

////////////////////////////
myEvent.on("end", (data) => {
  console.log(`Fim: ${data}`);
});

myEvent.emit("end", "Fim do programa");
////////////////////////////
