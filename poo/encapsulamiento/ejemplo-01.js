class Alumno {
	constructor(nombre, username, clases, direccion) {
		this.nombre = nombre;
		this._username = username; // Aunque el username se asigne desde el set debe declarse en el constructor
		this.clases = clases;
		// this.direccion = direccion; /* Dato sensible -> Debe ser encapsulado */
		this._direccion = direccion; /* El _ indica que es una propiedad privada */
	}

	get getDireccion() {
		return this._direccion;
	}

	set validateUserName(newUserName) {
		if (newUserName === "usuarioMaldito" || newUserName == "lacucaracha") {
			console.warn("No haga eso, joven");
		} else {
			this._username = newUserName;
			return newUserName;
		}
	}
}

const emilio = new Alumno("Emilio", "buenUsuario", ["Historia", "Matematicas", "Fisica"], "Calle Xictle mx 19 lt 28");

console.log(emilio.nombre);
console.log(emilio.clases);
// console.log(emilio._direccion);
console.log(emilio.getDireccion);
emilio.validateUserName = "barsaiz19";
