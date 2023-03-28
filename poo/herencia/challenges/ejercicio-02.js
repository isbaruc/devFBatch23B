class Construccion {
	constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
		this.numPuertas = numPuertas;
		this.numVentanas = numVentanas;
		this.numPisos = numPisos;
		this.direccion = direccion;
		this.altura = altura;
		this.largo = largo;
		this.ancho = ancho;
	}
	calcularArea() {
		return "El área de la construcción es: " + this.largo * this.ancho;
	}
	imprimirDireccion() {
		return "La dirección de esta construcción es: " + this.direccion;
	}
}

class Casa extends Construccion {
	constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
		super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
	}
}

class Edificio extends Construccion {
	constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
		super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
	}
}

const casa = new Casa(3, 6, 2, "Calle Xictle #28", 12, 10, 10);
