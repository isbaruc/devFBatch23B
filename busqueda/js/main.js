document.querySelector("#formulario").addEventListener("submit", buscar); //La funcion va sin () para que se ejecute cuando se haga el evento

function buscar(evt) {
	evt.preventDefault();
	let termino_busqueda = document.querySelector("#busqueda").value;

	dibujar_secuencial(termino_busqueda);
}

//Ejemplo NO USAR ASÍ
/*function dibujar_secuencial(nombre) {
	document.querySelector("#contenedor").innerHTML = ""; //Limpiamos el contenedor
	elephants.forEach((elephant, indice) => {
		/* console.log(elephant.name); */
/*		if (elephant.name == nombre) {
			document.querySelector("#contenedor").innerHTML += `<!-- <div class="col-3">
            <div
            class="card mb-5"
            style="width: 18rem">
            <img
            src="${elephant.image}"
            class="card-img-top"
            alt="..." />
            <div class="card-body">
            <h5 class="card-title">${elephant.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a
            href="#"
            class="btn btn-primary"
            >Go somewhere</a
            >
            </div>
            </div>
            </div> -->`;
		}
	});
} */

numeros.filter((numero) => {
	return numero == 5;
});
