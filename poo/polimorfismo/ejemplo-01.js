class Animal {
	constructor(nombre, color) {
		this.nombre = nombre;
		this.color = color;
	}

	saludo() {
		return "Hola soy un animal genérico...";
	}
}

class Perro extends Animal {
	constructor(nombre, color, raza) {
		super(nombre, color);
		this.raza = raza;
	}

	saludo() {
		return "Hola soy " + this.nombre + ", donde está Charlie?";
	}
}

const snoopy = new Perro("Snoopy", "Blanco", "Beagle");

console.log(snoopy.nombre);
console.log(snoopy.saludo());
