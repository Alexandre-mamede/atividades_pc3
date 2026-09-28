const Cliente = require('./objetos/Cliente');
const Animal = require('./objetos/Animal');
const Prontuario = require('./objetos/Prontuario');
const Veterinario = require('./objetos/Veterinario');

// ==========================================
// CRIANDO O CLIENTE
// ==========================================

const cliente = new Cliente("João Silva", "6199999-9999");

// ==========================================
// CRIANDO OS ANIMAIS
// ==========================================

const rex = new Animal("Rex", "Cachorro");
const luna = new Animal("Luna", "Gato");

// ==========================================
// CRIANDO OS PRONTUÁRIOS
// ==========================================

const prontuarioRex = new Prontuario(
    1,
    "Animal saudável. Vacinação em dia."
);

const prontuarioLuna = new Prontuario(
    2,
    "Animal apresentou febre. Em observação."
);

// ==========================================
// CRIANDO OS VETERINÁRIOS
// ==========================================

const veterinario1 = new Veterinario(
    "Dr. Carlos",
    "CRMV-12345"
);

const veterinario2 = new Veterinario(
    "Dra. Ana",
    "CRMV-67890"
);

// ==========================================
// RELACIONANDO CLIENTE E ANIMAIS
// 1:N
// ==========================================

cliente.addAnimal(rex);
cliente.addAnimal(luna);

// ==========================================
// RELACIONANDO ANIMAIS E PRONTUÁRIOS
// 1:1
// ==========================================

rex.setProntuario(prontuarioRex);
luna.setProntuario(prontuarioLuna);

// ==========================================
// RELACIONANDO ANIMAIS E VETERINÁRIOS
// N:N
// ==========================================

rex.addVeterinario(veterinario1);
rex.addVeterinario(veterinario2);

luna.addVeterinario(veterinario1);

// ==========================================
// EXIBINDO INFORMAÇÕES DO CLIENTE
// ==========================================

console.log("=================================");
console.log("       INFORMAÇÕES DO CLIENTE");
console.log("=================================");

console.log(`Nome: ${cliente.getNome()}`);
console.log(`Telefone: ${cliente.getTelefone()}`);

cliente.listarAnimais();

// ==========================================
// INFORMAÇÕES DOS ANIMAIS
// ==========================================

console.log("\n=================================");
console.log("       INFORMAÇÕES DOS ANIMAIS");
console.log("=================================");

const animais = cliente.getAnimais();

animais.forEach(animal => {
    console.log(`\nAnimal: ${animal.getNome()}`);
    console.log(`Espécie: ${animal.getEspecie()}`);

    console.log(`Cliente: ${animal.getCliente().getNome()}`);

    console.log(`Prontuário: ${animal.getProntuario().getNumero()}`);
    console.log(
        `Observações: ${animal.getProntuario().getObservacoes()}`
    );

    animal.listarVeterinarios();
});

// ==========================================
// REFERÊNCIAS CRUZADAS
// ==========================================

console.log("\n=================================");
console.log("       REFERÊNCIAS CRUZADAS");
console.log("=================================");

console.log(
    `Cliente possui ${cliente.getAnimais().length} animais.`
);

console.log(
    `Veterinário ${veterinario1.getNome()} atende ${veterinario1.getAnimais().length} animais.`
);

console.log(
    `Veterinário ${veterinario2.getNome()} atende ${veterinario2.getAnimais().length} animal.`
);

console.log(
    `O prontuário ${prontuarioRex.getNumero()} pertence ao animal ${prontuarioRex.getAnimal().getNome()}.`
);

console.log(
    `O prontuário ${prontuarioLuna.getNumero()} pertence ao animal ${prontuarioLuna.getAnimal().getNome()}.`
);