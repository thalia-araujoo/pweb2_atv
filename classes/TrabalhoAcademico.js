const Material = require('./Material');

class TrabalhoAcademico extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, descricao, instituicao, orientador) {
    super(id, titulo, autor, dataPublicacao, categoria, descricao);
    this.instituicao = instituicao;
    this.orientador = orientador;
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Instituição: ${this.instituicao}, Orientador: ${this.orientador}`);
  }
}

module.exports = TrabalhoAcademico;
