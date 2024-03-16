const EventEmmiter = require("events");

class Evento extends EventEmmiter {}
const meuEvento = new Evento();

// ON CRIA O EVENTO
meuEvento.on("segurança", (x, y) => {
  console.log(`Segurança: ${x} + ${y} = ${x + y}`);
});

// PARA CHAMAR É EMIT
meuEvento.emit("segurança", 10, 20);
