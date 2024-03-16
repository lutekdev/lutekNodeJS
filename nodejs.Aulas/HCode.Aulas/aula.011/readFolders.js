const fs = require("fs");

// LENDO PASTAS
fs.readdir("./", (err, data) => {
  if (err) throw new err();
  
  data.forEach((files) => {
    console.log(__dirname + "\\" +  files);
  })
});
