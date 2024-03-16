const Buffer = require("buffer").Buffer;

// const buf = Buffer.from("Curso Completo de NodeJS");
const buf = Buffer.from("Curso Completo de NodeJS");

console.log(buf);
//------------------------------------------------------------------------------

/** MOSTRANDO TEXTO */
console.log("Formato Default:", buf.toString());
console.log("Formato UTF-16:", buf.toString("utf-16le"));
console.log("Formato UTF-8:", buf.toString("utf8"));
console.log("Formato Base64:", buf.toString("base64"));
console.log("Formato ASCII:", buf.toString("ascii"));
console.log("Formato HEX:", buf.toString("hex"));

//------------------------------------------------------------------------------

const buf_string = Buffer.from("Curso Completo de NodeJS", "ucs-2");
console.log(buf_string.toString());

console.log(`Isso é um Buffer: ${Buffer.isBuffer(buf_string)}`);

/** PEGAR O TEXTO A PARTIR DO ÍNDICE OU SUBSTRING */
console.log(buf_string.toString("utf-8", 0, 10));

//------------------------------------------------------------------------------
