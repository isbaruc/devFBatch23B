const countries = ["México", "Pánama", "Guatemala", "El Salvador"];

// console.log(countries[2].split("")); //Prueba que se divide determinado elemento del array

// const countriesLength = [];

const longestCountry = (countries) => {
	const countriesLength = [];

	for (let i = 0; i < countries.length; i++) {
		countriesLength.push(countries[i].length);
		//console.log(`Pais: ${countries[i]} \nNumero de letras ${countries[i].length}`);
	}
	// return console.log(countriesLength);
	// return console.log(countries.filter(country => countries.length > 10 ));
	// console.log(Math.max.apply(null, countriesLength));
	console.log(`El país con el nombre más largo es: ${countries.filter((country) => country.length >= Math.max(...countriesLength)).toString()}`); //Se agrega apply Math.max.apply(null, countriesLength)para compatibilidad de los navegadores. Act. Spread Operator sustituye el uso de apply
};

longestCountry(countries);
