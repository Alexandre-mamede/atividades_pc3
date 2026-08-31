import {
    celsiusParaFahrenheit,
    horasParaMinutos,
    idadeEmDias,
    kmParaMetros,
    consumoMedio
} from "./conversores.js";

console.log("30°C em Fahrenheit:", celsiusParaFahrenheit(30));
console.log("2 horas em minutos:", horasParaMinutos(2));
console.log("20 anos em dias:", idadeEmDias(20));
console.log("3 km em metros:", kmParaMetros(3));
console.log("Consumo médio:", consumoMedio(500, 40));
