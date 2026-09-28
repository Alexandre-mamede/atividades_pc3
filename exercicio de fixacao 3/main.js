const CarteiraDigital = require('./carteiraDigital');

const carteira = new CarteiraDigital();

carteira.definirTitular('João Silva');

carteira.depositar(200);

console.log("Saldo após depósito:");
console.log(`R$ ${carteira.consultarSaldo().toFixed(2)}`);

carteira.sacar(50);

console.log("Saldo após saque:");
console.log(`R$ ${carteira.consultarSaldo().toFixed(2)}`);

console.log("Tentando sacar R$ 500,00:");
carteira.sacar(500);

console.log("\nInformações finais:");
carteira.exibirInformacoes();