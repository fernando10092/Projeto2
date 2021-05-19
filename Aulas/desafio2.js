//Declarando variaveis
var arr2 = [1, 10, 5, 20, 6, 40, 3, 80, 90];
console.log(arr2);

//RETORNA O MAIOR
console.log(Math.max.apply(null, arr2));
var remMax = Math.max.apply(null, arr2)

//RETORNA O MENOR
console.log(Math.min.apply(null, arr2));
var remMin = Math.min.apply(null, arr2);

//Encontrar a Posição no Array
var posMax = arr2.indexOf(remMax);
var posMin = arr2.indexOf(remMin);

//Remover Elemento
arr2.splice(posMax, 1);
arr2.splice(posMin, 1);

//Print da tela
console.log(arr2);

