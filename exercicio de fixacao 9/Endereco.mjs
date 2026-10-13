export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #localidade;
    #uf;

    // Novos atributos privados
    #complemento;
    #ddd;
    #estado;

    async setCep(cep) {
        try {
            // Valida o formato do CEP
            const cepFormatado = String(cep).replace(/\D/g, "");

            if (!/^\d{8}$/.test(cepFormatado)) {
                throw new Error("CEP inválido. Informe 8 dígitos.");
            }

            // Consulta a API ViaCEP
            const resposta = await fetch(
                `https://viacep.com.br/ws/${cepFormatado}/json/`
            );

            if (!resposta.ok) {
                throw new Error("Erro ao consultar a API ViaCEP.");
            }

            const dados = await resposta.json();

            // Verifica se o CEP existe
            if (dados.erro) {
                throw new Error("CEP não encontrado.");
            }

            // Atributos originais
            this.#cep = dados.cep;
            this.#logradouro = dados.logradouro;
            this.#bairro = dados.bairro;
            this.#localidade = dados.localidade;
            this.#uf = dados.uf;

            // Novos atributos
            this.#complemento = dados.complemento;
            this.#ddd = dados.ddd;
            this.#estado = dados.estado;

        } catch (erro) {
            throw erro;
        }
    }

    // Getters originais
    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getLocalidade() {
        return this.#localidade;
    }

    getUf() {
        return this.#uf;
    }

    // Novos getters
    getComplemento() {
        return this.#complemento;
    }

    getDdd() {
        return this.#ddd;
    }

    getEstado() {
        return this.#estado;
    }

    // Desafio extra 2
    mostrarEnderecoCompleto() {
        return [
            `CEP: ${this.#cep}`,
            `Logradouro: ${this.#logradouro || "não informado"}`,
            `Complemento: ${this.#complemento || "não informado"}`,
            `Bairro: ${this.#bairro || "não informado"}`,
            `Cidade: ${this.#localidade || "não informada"}`,
            `Estado: ${this.#estado || "não informado"}`,
            `UF: ${this.#uf || "não informada"}`,
            `DDD: ${this.#ddd || "não informado"}`
        ].join("\n");
    }
}

