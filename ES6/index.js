var a = 0;
const b = 0;
let c = 0;

//Var me permite declarar varias veces
var a = 1;
for (var a = 0; a < 10; a++) {
	console.log(a);
}

console.log("A: " + a);

//El Scope de let es solo bloques
for (let a2 = 0; a2 < 10; a2++) {
	console.log(a2);
}

console.log("A: " + a2);
