// Importando as classes
const Livro = require('./classes/Livro');
const Artigo = require('./classes/Artigo');
const Periodico = require('./classes/Periodico');
const TrabalhoAcademico = require('./classes/TrabalhoAcademico');
const Sistema_gestao = require('./classes/Sistema_gestao');
const Edicao = require('./classes/Edicao');

// Criando objetos de exemplo

// Criando uma edição de periódico
const edicao1 = new Edicao(2023, 1);
const edicao2 = new Edicao(2023, 2);

// Criando materiais
const livro1 = new Livro("1", "Dom Casmurro", "Machado de Assis", "1900-01-01", "Literatura", "Clássico da literatura brasileira", " Editora Nacional", "1ª Edição");
const artigo1 = new Artigo("2", "Estudo sobre Machado de Assis", "João Silva", "2020-05-15", "Acadêmico", "Análise crítica da obra", "Referência A, Referência B", "Página 50");
const periodico1 = new Periodico("3", "Revista Literária", "Revista A", "2022-12-01", "Periódico", "Revista sobre literatura", [edicao1, edicao2]);
const tcc1 = new TrabalhoAcademico("4", "Análise de obras literárias", "Aluno A", "2022-11-30", "Acadêmico", "TCC de Literatura", "Universidade Y", "Prof. Dr. Z");

// Criando o sistema de gestão
const sistema = new Sistema_gestao();
sistema.adicionarMaterial(livro1);
sistema.adicionarMaterial(artigo1);
sistema.adicionarMaterial(periodico1);
sistema.adicionarMaterial(tcc1);

// Exibindo materiais
console.log("Materiais cadastrados:");
sistema.exibirMateriais();

/* Editando um material (Exemplo: Editando Livro com id 1)
console.log("\nEditando o Livro com id 1...");
sistema.editarMaterial("1", {
  titulo: "Dom Casmurro - Edição Atualizada",
  descricao: "Uma nova análise do clássico de Machado de Assis"
});*/

/*  Exibindo os materiais após edição
console.log("\nMateriais após edição:");
sistema.exibirMateriais(); */

/* Removendo um material (Exemplo: Removendo Artigo com id 2)
console.log("\nRemovendo o Artigo com id 2...");
sistema.removerMaterial("2"); */

/* Exibindo os materiais após remoção
console.log("\nMateriais após remoção:");
sistema.exibirMateriais(); */
