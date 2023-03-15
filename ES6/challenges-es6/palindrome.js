const word = "papap";

const splitWord = word.split("");

let noPalindromo = true;

const palindrome = (palabra) => {
	for (let i = splitWord.length; i > 0; i--) {
		splitWord[splitWord.length - i] != splitWord[i - 1] ? (noPalindromo = true) : (noPalindromo = false);
		// console.log(`Letra splitWord: ${splitWord[splitWord.length - i]} \nLetra reverseWord: ${splitWord[i - 1]} \nValor de i: ${i} `);
	}

	if (noPalindromo === true) console.log("Esta palabra no es un palindromo");
	else console.log("Esta palabra si es palindromo");
};

palindrome(word);
