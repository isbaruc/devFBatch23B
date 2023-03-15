let concatenar = "Hola " + "amigos";
console.log(concatenar);

/* let grupo = "dev22web";
console.log(concatenar + " del " + grupo); */

function concatenarAlumno(nombre, grupo) {
	let calificacion = sumar(4, 3);
	// `Hola Eduardo de dev22web con 7`
	`Hola ${nombre} de ${grupo} con ${calificacion}`;
	return "Hola " + nombre + " de " + grupo + " con cal. " + calificacion;
}

function ponerHTML() {
	return "<h1>Hola</h1><p>Hola de nuevo</p>";
}

function sumar(a, b) {
	let c = a + b;
	return c;
}

const respuesta = concatenarAlumno("Eduardo", "dev22web");

ponerHTML();
