const Material = require('./Material');

class Artigo extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, descricao, referencias, pagina) {
    super(id, titulo, autor, dataPublicacao, categoria, descricao);
    this.referencias = referencias;
    this.pagina = pagina;
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Referências: ${this.referencias}, Página: ${this.pagina}`);
  }
}

module.exports = Artigo;
