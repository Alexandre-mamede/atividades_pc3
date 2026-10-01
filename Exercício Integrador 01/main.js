const Pessoa = require("./pessoas/Pessoa");
const Aluno = require("./pessoas/Aluno");
const Professor = require("./pessoas/Professor");
const util = require("./biblioteca/util");

console.log("=================================");
console.log("       SISTEMA ACADÊMICO");
console.log("=================================\n");

// ==========================================
// 1. CADASTRANDO DUAS PESSOAS
// ==========================================

console.log("CADASTRO DE PESSOAS");
console.log("-----------------------------");

const pessoa1 = new Pessoa(
    "Carlos Silva",
    "carlos@gmail.com"
);

const pessoa2 = new Pessoa(
    "Maria Souza",
    "maria@email"
);

util.mostrarDados(pessoa1);
util.mostrarDados(pessoa2);

// ==========================================
// 2. CADASTRANDO DOIS ALUNOS
// ==========================================

console.log("\nCADASTRO DE ALUNOS");
console.log("-----------------------------");

const aluno1 = new Aluno(
    "João Silva",
    "joao@gmail.com",
    "2025001"
);

const aluno2 = new Aluno(
    "Pedro Santos",
    "pedro@email",
    "ABC123"
);

util.mostrarDados(aluno1);
util.mostrarDados(aluno2);

// ==========================================
// 3. CADASTRANDO DOIS PROFESSORES
// ==========================================

console.log("\nCADASTRO DE PROFESSORES");
console.log("-----------------------------");

const professor1 = new Professor(
    "Ana Oliveira",
    "ana@faculdade.edu.br",
    "Programação Orientada a Objetos"
);

const professor2 = new Professor(
    "Carlos Mendes",
    "carlos@gmail.com",
    "Banco de Dados"
);

util.mostrarDados(professor1);
util.mostrarDados(professor2);

// ==========================================
// 4. TESTANDO VALIDAÇÕES
// ==========================================

console.log("\nTESTANDO VALIDAÇÕES");
console.log("-----------------------------");

console.log(
    "Email válido:",
    util.validarEmail("teste@gmail.com")
);

console.log(
    "Email inválido:",
    util.validarEmail("teste@email")
);

console.log(
    "Matrícula válida:",
    util.validarMatricula("2025002")
);

console.log(
    "Matrícula inválida:",
    util.validarMatricula("ABC123")
);

console.log(
    "CPF válido:",
    util.validarCPF("12345678901")
);

console.log(
    "CPF inválido:",
    util.validarCPF("123")
);

// ==========================================
// 5. TESTANDO SETTERS
// ==========================================

console.log("\nTESTANDO SETTERS");
console.log("-----------------------------");

console.log(
    "Alterando email do aluno:",
    aluno1.setEmail("novoemail@gmail.com")
);

console.log(
    "Novo email:",
    aluno1.getEmail()
);

console.log(
    "Tentando alterar email do professor:",
    professor1.setEmail("professor@gmail.com")
);

console.log(
    "Email atual do professor:",
    professor1.getEmail()
);

console.log(
    "Alterando email do professor corretamente:",
    professor1.setEmail("professor@faculdade.edu.br")
);

console.log(
    "Novo email:",
    professor1.getEmail()
);

// ==========================================
// 6. RELATÓRIO FINAL
// ==========================================

console.log("\n=================================");
console.log("          RELATÓRIO FINAL");
console.log("=================================");

console.log("\nPESSOAS:");
util.mostrarDados(pessoa1);
util.mostrarDados(pessoa2);

console.log("\nALUNOS:");
util.mostrarDados(aluno1);
util.mostrarDados(aluno2);

console.log("\nPROFESSORES:");
util.mostrarDados(professor1);
util.mostrarDados(professor2);