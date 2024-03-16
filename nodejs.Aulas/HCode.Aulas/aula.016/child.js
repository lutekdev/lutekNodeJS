const { spawn } = require("child_process");
const ls = spawn("ls", [".."]);

/**
 * INFORMAÇÕES DE EVENTOS:
 *  - STDIN = Escrita
 *  - STDOUT = Leitura
 *  - STDERR = Erro
 */

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

ls.on("exit", (code) => {
  console.log(`child process exited with code ${code}`);
});
