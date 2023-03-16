const countries = ["México", "Pánama", "Guatemala", "El Salvador"];

const longestCountry = (countries) => {
	const countriesLength = [];

	for (let i = 0; i < countries.length; i++) {
		countriesLength.push(countries[i].length);
	}
	return console.log(`El país con el nombre más largo es: ${countries.filter((country) => country.length >= Math.max(...countriesLength)).toString()}`); //Se agrega apply Math.max.apply(null, countriesLength)para compatibilidad de los navegadores. Act. Spread Operator sustituye el uso de apply
};

longestCountry(countries);
