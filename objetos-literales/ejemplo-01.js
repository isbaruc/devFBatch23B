"use strict";

// objetos literales son != objetos POO
//Objetos literales son exclusivos de JavaScript, en otros lenguajes se nombran de diferente manera

const jaguar = {
	//Se les asigna atributos/propiedades y métodos
	nombre: "Jaguar",
	color: "amarillo",
	//Un  método es una función definida dentro de un objeto
	funcionJaguar() {
		return "Gruñido de Jaguar";
	},
	//Podemos crear métodos como funciones flecha.
	//!IMPORTANTE las funciones flecha no nos permiten usar this (y esto es importante en POO)
	funcionCaminar: () => {
		return "Caminar";
	},
};

//Accedemos a los valores de las propiedades y métodos utilizando notación de punto

console.log(jaguar.nombre);
console.log(jaguar.funcionJaguar());
