//Azucar sintáctica: Por fuera el PROTOTIPO es una clase pero internamente es un PROTOTIPO a partir de una FUNCION constructor
class Animal {
	//El constructor nos permite contruir las PROPIEDADES
	constructor(nombre, color) {
		//this es un apuntador qeu hace referencia a sí misma como funcion y nos ayuda a acceder a la propiedad de una funcion
		this.nombre = nombre; //Una propiedad no es lo mismo que una variable
		this.color = color;
	}
	//Los métodos se agregan fuera del constructor
	sonidoAnimal() {
		return "Estoy emitiendo el sonido de un " + this.nombre;
	}
}

const jirafa = new Animal("Jirafa", "amarillo");

console.log(jirafa);
console.log(jirafa.sonidoAnimal());
