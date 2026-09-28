class CarteiraDigital {
    #titular;
    #saldo;

    constructor() {
        this.#titular = "";
        this.#saldo = 0;
    }

    definirTitular(nome) {
        this.#titular = nome;
    }

    consultarTitular() {
        return this.#titular;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
        } else if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.#saldo -= valor;
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }

    exibirInformacoes() {
        console.log(`Titular: ${this.#titular}`);
        console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
    }
}

module.exports = CarteiraDigital;