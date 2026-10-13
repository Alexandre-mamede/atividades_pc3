import Endereco from "./Endereco.mjs";

const endereco = new Endereco();

// Altere o CEP para testar outros casos
const cep = "72015565";

async function main() {
    try {
        await endereco.setCep(cep);

        console.log("===== ENDEREÇO CONSULTADO =====");
        console.log("CEP:", endereco.getCep());
        console.log("Logradouro:", endereco.getLogradouro() || "não informado");
        console.log("Complemento:", endereco.getComplemento() || "não informado");
        console.log("Bairro:", endereco.getBairro() || "não informado");
        console.log("Cidade:", endereco.getLocalidade());
        console.log("UF:", endereco.getUf());
        console.log("Estado:", endereco.getEstado() || "não informado");
        console.log("DDD:", endereco.getDdd() || "não informado");

        console.log("\n===== ENDEREÇO COMPLETO =====");
        console.log(endereco.mostrarEnderecoCompleto());

    } catch (erro) {
        console.error("Não foi possível consultar o endereço:", erro.message);
    }
}

main();

