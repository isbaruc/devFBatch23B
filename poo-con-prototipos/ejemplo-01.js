"use strict";

//DEFINICION: Javascript, es un lenguaje multi-paradigma, principalmente orientado a objetos y basado en PROTOTIPOS (FUNCIONES).
//Por convención las clases y prototipos inician con mayúscula
//PROTOTIPO
function Animal(nombre, color) {
	{
		this.nombre = nombre;
		this.color = color;
		//Aquí pueden ir los métodos
		this.sonidoAnimal = function sonidoAnimal() {
			return "Hola estoy emitiendo el sonido de " + this.nombre;
		};
	}
}

//DEFINICION: Un objeto en JavaScript es la instancia de un prototipo/funcion
//Una instancia contiene las mismas propiedades que el PROTOTIPO
//INSTANCIA
const jirafa = new Animal("Jirafa", "Amarillo"); //New crea la instancia de un PROTOTIPO (animal).
const perro = new Animal("Perro", "Café");

console.log(jirafa);
console.log(perro.nombre);
console.log(perro.sonidoAnimal());
