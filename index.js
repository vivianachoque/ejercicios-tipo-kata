/*Hacer una funcion que recibiendo cualquier cantidad de listas como parámetro, devuelva una sola lista 
agrupando los valores de todas las listas */
let miArray = [1,2,3];
let miArray2 = [4,5];

function devolver () {
    const espacio = ' ';

let armarCadena = miArray.join(' ')+ espacio + miArray2.join (' ');
console.log(armarCadena);
}