/*Ejercicio 3 Hacer una función que permita saber cuántos días faltan para que acabe el año. */

function daysToFinishYear(){
    date = new Date();
    quantDays=31;
    let day = date.getDate();
    let year = 366;
    year - quantDays;
}

console.log (year-day);
}