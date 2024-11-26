class Sistema_gestao {
    constructor() {
      this.materiais = [];
    }
  
    // Adicionar material ao sistema
    adicionarMaterial(material) {
      this.materiais.push(material);
    }
  
    // Exibir todos os materiais
    exibirMateriais() {
      if (this.materiais.length === 0) {
        console.log('Nenhum material cadastrado.');
        return;
      }
      this.materiais.forEach(material => material.exibirInformacoes());
    }
  
    // Editar material pelo ID
    editarMaterial(id, novosDados) {
      const material = this.materiais.find(mat => mat.id === id);
      if (!material) {
        console.log('Material não encontrado.');
        return;
      }
      // Atualizar os dados do material
      Object.assign(material, novosDados);
      console.log('Material editado com sucesso!');
    }
  
    // Remover material pelo ID
    removerMaterial(id) {
      const index = this.materiais.findIndex(mat => mat.id === id);
      if (index === -1) {
        console.log('Material não encontrado.');
        return;
      }
      this.materiais.splice(index, 1); // Remove o material da lista
      console.log('Material removido com sucesso!');
    }
  }
  
  module.exports = Sistema_gestao;
  