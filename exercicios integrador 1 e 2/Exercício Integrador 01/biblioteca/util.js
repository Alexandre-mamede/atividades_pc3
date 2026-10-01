function validarEmail(email) {
    return (
        typeof email === "string" &&
        email.includes("@") &&
        (email.endsWith(".com") || email.endsWith(".edu.br"))
    );
}

function validarMatricula(matricula) {
    return (
        typeof matricula === "string" &&
        matricula.length >= 5 &&
        /^[0-9]+$/.test(matricula)
    );
}

function validarCPF(cpf) {
    if (typeof cpf !== "string") {
        return false;
    }

    cpf = cpf.replace(/\D/g, "");

    return cpf.length === 11;
}

function mostrarDados(objeto) {
    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`Email: ${objeto.getEmail()}`);

    if (typeof objeto.getMatricula === "function") {
        console.log(`Matrícula: ${objeto.getMatricula()}`);
    }

    if (typeof objeto.getDisciplina === "function") {
        console.log(`Disciplina: ${objeto.getDisciplina()}`);
    }

    console.log("-----------------------------");
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF,
    mostrarDados
};