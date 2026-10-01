export default class Pessoa {
    #nome;
    #email;

    constructor(nome = "", email = "") {
        this.#nome = nome;
        this.#email = email;
    }

    setNome(nome) {
        if (typeof nome !== "string" || nome.trim() === "") return false;
        this.#nome = nome;
        return true;
    }

    getNome() { return this.#nome; }

    setEmail(email) {
        if (typeof email !== "string" || !email.includes("@")) return false;
        this.#email = email;
        return true;
    }

    getEmail() { return this.#email; }
}
