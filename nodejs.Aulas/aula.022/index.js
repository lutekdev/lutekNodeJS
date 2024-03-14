const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);

//STDIO - Standard Input Output
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

// STDERR - Standard Error
ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

// Exit event - quando o processo termina
ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
