let arreglo = [1, 5, 3];
let arreglo2 = [4, 5];
let arreglo4 = [2, 6, 5];
arreglo.push(9);
arreglo.push(7);

let arreglo3 = [...arreglo, ...arreglo2, arreglo4];

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
