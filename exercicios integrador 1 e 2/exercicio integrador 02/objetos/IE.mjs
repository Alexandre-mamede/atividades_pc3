import PJ from "../pessoas/PJ.mjs";

// ============================================================
// 1. IMPLEMENTAÇÃO COM CLASSE
// ============================================================
class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero = "", estado = "", dataRegistro = new Date()) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
        this.#pj = null;
    }

    setNumero(numero) {
        if (typeof numero !== "string" || numero.trim() === "") return false;
        this.#numero = numero;
        return true;
    }
    getNumero() { return this.#numero; }

    setEstado(estado) {
        if (typeof estado !== "string" || estado.trim() === "") return false;
        this.#estado = estado;
        return true;
    }
    getEstado() { return this.#estado; }

    setDataRegistro(dataRegistro) {
        if (!(dataRegistro instanceof Date)) return false;
        this.#dataRegistro = dataRegistro;
        return true;
    }
    getDataRegistro() { return this.#dataRegistro; }

    setPJ(pj) {
        if (!(pj instanceof PJ)) return false;
        this.#pj = pj;
        return true;
    }
    getPJ() { return this.#pj; }
}

// ============================================================
// 2. IMPLEMENTAÇÃO COM FACTORY FUNCTION
// ============================================================
function IEfunc(numero = "", estado = "", dataRegistro = new Date()) {
    let numeroIE = numero;
    let estadoIE = estado;
    let dataIE = dataRegistro;
    let pj = null;

    return {
        setNumero(numero) {
            if (typeof numero !== "string" || numero.trim() === "") return false;
            numeroIE = numero;
            return true;
        },
        getNumero() { return numeroIE; },

        setEstado(estado) {
            if (typeof estado !== "string" || estado.trim() === "") return false;
            estadoIE = estado;
            return true;
        },
        getEstado() { return estadoIE; },

        setDataRegistro(dataRegistro) {
            if (!(dataRegistro instanceof Date)) return false;
            dataIE = dataRegistro;
            return true;
        },
        getDataRegistro() { return dataIE; },

        setPJ(pjObjeto) {
            if (!(pjObjeto instanceof PJ)) return false;
            pj = pjObjeto;
            return true;
        },
        getPJ() { return pj; }
    };
}

// ============================================================
// 3. IMPLEMENTAÇÃO COM OBJETO LITERAL
// ============================================================
const IEjson = {
    numero: "",
    estado: "",
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (typeof numero !== "string" || numero.trim() === "") return false;
        this.numero = numero;
        return true;
    },
    getNumero() { return this.numero; },

    setEstado(estado) {
        if (typeof estado !== "string" || estado.trim() === "") return false;
        this.estado = estado;
        return true;
    },
    getEstado() { return this.estado; },

    setDataRegistro(dataRegistro) {
        if (!(dataRegistro instanceof Date)) return false;
        this.dataRegistro = dataRegistro;
        return true;
    },
    getDataRegistro() { return this.dataRegistro; },

    setPJ(pjObjeto) {
        if (!(pjObjeto instanceof PJ)) return false;
        this.pj = pjObjeto;
        return true;
    },
    getPJ() { return this.pj; }
};

// Exportações (Padrão + Nomeadas)
export default IEclss;
export { IEfunc, IEjson };
