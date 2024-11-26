const Material = require('./Material');

class Periodico extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, descricao, edicoes) {
    super(id, titulo, autor, dataPublicacao, categoria, descricao);
    this.edicoes = edicoes; // Array de edições
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Edições: ${this.edicoes.join(', ')}`);
  }
}

module.exports = Periodico;
