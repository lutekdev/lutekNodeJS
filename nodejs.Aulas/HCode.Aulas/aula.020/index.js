/** PARA DEIXAR OS MÓDULOS ORGANIZADOS DENTRO DO ARQUIVO USA O CONST */
const chalk = require("chalk");

function color(message, color) {
  return color ? chalk[color](message) : message;
}

function hideFunction() {
  return color("Função Ocultada");
}

function showFunction() {
  return color("Função Exibida");
}

module.exports = {
  hideFunction,
  showFunction,
};
