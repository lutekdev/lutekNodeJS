const chalk = require("chalk");

const colorRGB = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

module.exports = {
    colorRGB
};
