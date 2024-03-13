const fs = require('fs')

// LENDO ARQUIVO;
fs.readFile("test.txt", (err, data) => {
    if (err) throw err
    console.log(data.toString())
})