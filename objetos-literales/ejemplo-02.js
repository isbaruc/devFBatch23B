"use strict";

const cinthya = {
	primer_nombre: "Cinthya",
	//Podemos utilizar claves con espacio, pero idealmente deberiamos usar el mismo modo de escritura en todas las claves para mantener la legibilidad y uniformidad del código
	"segundo nombre": "Araceli",
	apellido: "Garcilazo",
	intereses: ["Leer", "Tatuajes", "Cajeta"],
	x1: "uno",
	x2: "dos",
};

/* const clave = "primer_nombre";
//Notación de los corchetes cuadrados para acceder a valores
console.log(cinthya[clave]);
 */

console.log(cinthya["apellido"]);
console.log(cinthya["x" + 1]);
console.log(cinthya["segundo nombre"]);
