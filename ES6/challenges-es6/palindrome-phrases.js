// const phrase = "anita lava la tina";
const phrase = "Anita lava la tina";

const palindrome = (prhase) => {
	const prhaseToLower = phrase.toLowerCase();
	const phraseWithoutSpaces = prhaseToLower.replaceAll(" ", "");
	const splitPrhase = phraseWithoutSpaces.split("");

	let noPalindromo = 0;

	for (let i = splitPrhase.length; i > 0; i--) {
		splitPrhase[splitPrhase.length - i] != splitPrhase[i - 1] ? noPalindromo++ : noPalindromo;
		console.log(`Letra splitWord: ${splitPrhase[splitPrhase.length - i]} \nLetra reverseWord: ${splitPrhase[i - 1]} \nValor de i: ${i} \nnoPalindrome: ${noPalindromo}`);
	}

	if (noPalindromo > 0) return console.log("Esta frase no es un palindromo");
	else return console.log("Esta frase si es palindromo");
};

palindrome(phrase);
