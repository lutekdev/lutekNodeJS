const path = require("path");

/** MOSTRAR O NOME DO ARQUIVO MESMO COM O DIREITO COM BARRAS */
// console.log(path.basename(""));

/** MOSTRAR NOME DO ARQUIVO */
console.log("BaseName:", path.basename("c:\\temp\\arquivo.html"));

/** NORMALIZAR UMA URL - ARRUMA AS BARRAS */
console.log("Normalize WithOut Dir:", path.normalize("c:\\temp/dir//subdir/dir/.."));
console.log("Normalize With Dir:", path.normalize("c:\\temp/dir//subdir/dir/"));

/** MONTAR UM CAMINHO */
console.log("Join Path:", path.join("/test", "test2", "teste3/teste4", "dir"));

/** MOSTRAR O CAMINHO ABSOLUTO DO ARQUIVO A PARTIR DE ONDE ESTÁ SENDO EXECUTADO O CÓDIGO */
console.log("Resolve:", path.resolve("path2.js"));

/** PEGAR A EXTENSÃO DO NOME DO ARQUIVO */
console.log("Extension:", path.extname("nome.js"));
