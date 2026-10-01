import Pessoa from "./Pessoa.js";

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor(nome = "", email = "", cnpj = "", razaoSocial = "") {
        super(nome, email);
        this.#cnpj = cnpj;
        this.#razaoSocial = razaoSocial;
    }

    setCNPJ(cnpj) {
        // Desafio Extra 1: Aceita apenas CNPJ com exatamente 14 caracteres numéricos (limpos)
        if (typeof cnpj !== "string" || cnpj.trim().length !== 14) {
            return false;
        }
        this.#cnpj = cnpj;
        return true;
    }

    getCNPJ() { return this.#cnpj; }

    setRazaoSocial(razaoSocial) {
        if (typeof razaoSocial !== "string" || razaoSocial.trim() === "") {
            return false;
        }
        this.#razaoSocial = razaoSocial;
        return true;
    }

    getRazaoSocial() { return this.#razaoSocial; }
}
