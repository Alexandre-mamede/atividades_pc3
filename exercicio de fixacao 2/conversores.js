class Conversor {
    celsiusParaFahrenheit(celsius) {
        return (9 / 5) * celsius + 32; 
    }
    quilometrosParaMilhas(km){
        return km * 0.621371; 
    }
    minutosParaHoras(minutos){
        return minutos / 60; 
    }
}


module.exports = Conversor; 