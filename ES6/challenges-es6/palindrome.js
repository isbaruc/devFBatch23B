const word = "papap";

const wordToLower = word.toLowerCase();

const splitWord = wordToLower.split("");

let noPalindromo = true;

const palindrome = (palabra) => {
	for (let i = splitWord.length; i > 0; i--) {
		splitWord[splitWord.length - i] != splitWord[i - 1] ? (noPalindromo = true) : (noPalindromo = false);
		// console.log(`Letra splitWord: ${splitWord[splitWord.length - i]} \nLetra reverseWord: ${splitWord[i - 1]} \nValor de i: ${i} `);
	}

	if (noPalindromo === true) return console.log("Esta palabra no es un palindromo");
	else return console.log("Esta palabra si es palindromo");
};

palindrome(word);
