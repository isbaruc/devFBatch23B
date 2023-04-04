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

	//Agrega un elemento al principio
	unshift(item) {
		// accedemos al ultimo elemento
		const lastItem = this.data[this.length - 1];

		// recorremos hacia adelante los valores
		for (let i = 0; i <= this.length - 1; i++) {
			this.data[i + 1] = this.data[i];
		}

		// actualizamos los valores del ultimo y primer elemento
		this.data[this.length] = lastItem;
		this.data[0] = item;

		// aumentamos el this.length que es el número de elementos en nuestro array
		this.length++;
		return item;
	}

	//Agregar metodos pop y shift para MyArray
}

const list = new MyArray();
list.push("Hola");
list.push("Mundo");
console.log(list.get(1)); //returns 'Mundo'
