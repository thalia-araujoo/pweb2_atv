const Material = require('./Material');

class Livro extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, descricao, editora, edicao) {
    super(id, titulo, autor, dataPublicacao, categoria, descricao);
    this.editora = editora;
    this.edicao = edicao;
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Editora: ${this.editora}, Edição: ${this.edicao}`);
  }
}

module.exports = Livro;
