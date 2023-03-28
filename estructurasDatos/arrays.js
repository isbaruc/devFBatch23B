class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	/* Obtener un elemento dada una posicion/indice */
	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}

	//Agregar metodos pop y shift para MyArray
}

const list = new MyArray();
list.push("Hola");
list.push("Mundo");
console.log(list.get(1)); //returns 'Mundo'
