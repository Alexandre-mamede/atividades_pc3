import PJ from "./pessoas/PJ.mjs";
import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";

// === PARTE 7: CRIAÇÃO E CONFIGURAÇÃO DOS OBJETOS ===
const empresaA = new PJ();
empresaA.setNome("Tech Solutions LTDA");
empresaA.setEmail("contato@techsolutions.com");
empresaA.setCNPJ("12345678000199"); // 14 caracteres (Desafio 1)
empresaA.setRazaoSocial("Tech Solutions Servicos Computacionais");

const empresaB = new PJ();
empresaB.setNome("Global Trade SA");
empresaB.setEmail("financeiro@globaltrade.com");
empresaB.setCNPJ("98765432000111"); 
empresaB.setRazaoSocial("Global Trade Importacao e Exportacao");

const dataHoje = new Date();

// 1. Instanciando via Classe (IEclss)
const ieClasse = new IEclss("IS-112233", "SP", dataHoje);
ieClasse.setPJ(empresaA);

// 2. Instanciando via Factory Function (IEfunc)
const ieFactory = IEfunc("IS-445566", "RJ", dataHoje);
ieFactory.setPJ(empresaB); // Desafio Extra 2: Associando objetos PJ diferentes

// 3. Configurando o Objeto Literal (IEjson)
IEjson.setNumero("IS-778899");
IEjson.setEstado("MG");
IEjson.setDataRegistro(dataHoje);
IEjson.setPJ(empresaA);


// === PARTE 8: TESTANDO O INSTANCEOF (OBJETO INVÁLIDO) ===
console.log("=== Testando Validações de Tipo ===");
const objetoInvalido = { nome: "Empresa Invalida" };

console.log("Invalido na Classe (esperado: false):", ieClasse.setPJ(objetoInvalido));
console.log("Invalido na Factory (esperado: false):", ieFactory.setPJ(objetoInvalido));
console.log("Invalido no JSON Literal (esperado: false):", IEjson.setPJ(objetoInvalido));

console.log("Valido na Classe (esperado: true):", ieClasse.setPJ(empresaA));


// === DESAFIO AVANÇADO: FUNÇÃO UNIFICADA MOSTRAR IE ===
function mostrarIE(ie) {
    const pjRelacionado = ie.getPJ();
    
    console.log("\n=== Inscrição Estadual ===");
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    // Exibição da data formatada conforme Parte 9
    console.log(`Data de Registro: ${ie.getDataRegistro() ? ie.getDataRegistro().toLocaleString('pt-BR') : 'N/A'}`);
    
    console.log("\n=== Pessoa Jurídica ===");
    if (pjRelacionado) {
        // Reutilização de métodos herdados (Parte 2) e específicos de PJ
        console.log(`Nome: ${pjRelacionado.getNome()}`);
        console.log(`E-mail: ${pjRelacionado.getEmail()}`);
        console.log(`CNPJ: ${pjRelacionado.getCNPJ()}`);
        console.log(`Razão Social: ${pjRelacionado.getRazaoSocial()}`);
    } else {
        console.log("Nenhuma Pessoa Jurídica relacionada.");
    }
}

// Executando o Relatório Final (Parte 9) através do Desafio Avançado
console.log("\n==============================================");
console.log("            RELATÓRIO DE TESTES               ");
console.log("==============================================");

console.log("\n>> RELATÓRIO 1: IMPLEMENTAÇÃO POR CLASSE (IEclss)");
mostrarIE(ieClasse);

console.log("\n>> RELATÓRIO 2: IMPLEMENTAÇÃO POR FACTORY (IEfunc)");
mostrarIE(ieFactory);

console.log("\n>> RELATÓRIO 3: IMPLEMENTAÇÃO POR OBJETO LITERAL (IEjson)");
mostrarIE(IEjson);
