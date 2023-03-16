// const phrase = "anita lava la tina";
const phrase = "Alí TomÓ tila";

const normalizePhrase = (phrase) => {
	// return console.log(prhase.normalize("NFD").replace(/([aeiou])\u0301|(u)[\u0301\u0308]/gi, "$1$2"));
	return phrase
		.normalize("NFD") //Normaliza por la forma Canocical Decomposition
		.replace(/\u0301/gi, "") //Elimina acentos
		.replaceAll(" ", ""); //Elimina los espacios
	/* RegExp -> https://www.tutorialspoint.com/javascript_regexp/javascript_regexp_meta_inside.htm
	Rango acentos Unicode -> https://symbl.cc/es/unicode/blocks/combining-diacritical-marks/ */
};

const toLowerCase = (normalizedPhrase) => {
	/* const phraseToLower = normalizePhrase(normalizedPhrase).toLowerCase();
	const phraseWithoutSpaces = phraseToLower.replaceAll(" ", "");

	// console.log(phraseWithoutSpaces);

	return phraseWithoutSpaces; */
	return normalizePhrase(normalizedPhrase).toLowerCase();
};

const splitPhrase = (lowerPhrase) => {
	// const splitedPhrase = toLowerCase(lowerPhrase).split("");

	return toLowerCase(lowerPhrase).split("");
};

const palindrome = (phrase) => {
	let noPalindromo = 0;

	for (let i = splitPhrase(phrase).length; i > 0; i--) {
		splitPhrase(phrase)[splitPhrase(phrase).length - i] != splitPhrase(phrase)[i - 1] ? noPalindromo++ : noPalindromo;
		console.log(`Letra splitWord: ${splitPhrase(phrase)[splitPhrase(phrase).length - i]} \nLetra reverseWord: ${splitPhrase(phrase)[i - 1]} \nValor de i: ${i} \nnoPalindrome: ${noPalindromo}`);
	}

	if (noPalindromo > 0) return console.log("Esta frase no es un palindromo");
	else return console.log("Esta frase si es palindromo");
};

normalizePhrase(phrase);
palindrome(phrase);
