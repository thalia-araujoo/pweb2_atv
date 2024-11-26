class Material {
    constructor(id, titulo, autor, dataPublicacao, categoria, descricao) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.dataPublicacao = dataPublicacao;
      this.categoria = categoria;
      this.descricao = descricao;
    }
  
    exibirInformacoes() {
      console.log(`ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Data de Publicação: ${this.dataPublicacao}, Categoria: ${this.categoria}`);
    }
  }
  
  module.exports = Material;
  