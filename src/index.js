const colors = require("colors");

// trabajando el modulo fs generico y convirtiendo el codigo asincrono en promesas de forma manual
/*
const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, value) => {
      if (err) return reject(err);
      resolve(value.blue);
    });
  });
};

const result = async () => console.log(await getText("./src/data/file.txt"));
result();
*/

// trabajando modulo fs con promesas de forma automatica (importando)
/*
const { readFile } = require("fs/promises");

const result2 = async () => console.log((await readFile("./src/data/file.txt", "utf-8")).toString().blue);

result2();
*/

// convertir metodos del objeto fs en promesas (sin importar los que son promesas directamente)

const { promisify } = require("util");
const { readFile, read } = require("fs");

const readFilePromise = promisify(readFile);

const promesa = async () => {
  console.log(await readFilePromise("./src/data/file.txt", "utf-8"))
  console.log("Promesa terminada");
};
promesa();