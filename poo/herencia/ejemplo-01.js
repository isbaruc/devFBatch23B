class Animal {
	constructor(nombre, color) {
		this.nombre = nombre;
		this.color = color;
	}
	sonidoDeAnimal() {
		return "Estoy emitiendo el sonido de " + this.nombre;
	}
}

class Perro extends Animal {
	constructor(nombre, color, pulgas, peludo) {
		super(nombre, color);
		this.pulgas = pulgas;
		this.peludo = peludo;
	}

	ladrar() {
		return "Guau";
	}
}
class Gato extends Animal {
	constructor(nombre, color, pulgas, peludo) {
		super(nombre, color);
		this.pulgas = pulgas;
		this.peludo = peludo;
	}

	maullar() {
		return "Miau";
	}
}

const perro = new Perro("Perro", "Azul", 2, true);
const gato = new Gato("Gato", "Rosa", 5, false);
const animal = new Animal("Jaguar", "Negro");
