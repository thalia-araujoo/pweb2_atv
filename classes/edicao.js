class Edicao {
    constructor(ano, numero) {
      this.ano = ano;
      this.numero = numero;
    }
  
    exibirEdicao() {
      console.log(`Edição: Ano ${this.ano}, Número ${this.numero}`);
    }
  }
  
  module.exports = Edicao;
  