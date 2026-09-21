const Conversor = require('./conversores.js'); // Alterado para 'c' minúsculo
const conversor = new Conversor(); 

console.log(conversor.celsiusParaFahrenheit(25));
console.log(conversor.quilometrosParaMilhas(10));
console.log(conversor.minutosParaHoras(150));
