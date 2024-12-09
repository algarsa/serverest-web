/// <reference types="Cypress" />

import HomeElements from "../elements/HomeElements";
const homeElements = new HomeElements();

class HomePage {

  clicarLinkListaCompras(){
    cy.get(homeElements.linkListaCompras()).click();
  }
  
  exibirClasseJumbotron(){
    cy.get(homeElements.classeJumbotron());
  }

  preencherPesquisarProduto(produto){
    cy.get(homeElements.campoPesquisar()).type(produto);
  }

  clicarBotaoPesquisar(){
    cy.get(homeElements.botaoPesquisar()).click();
  }

  exibirListaProdutos(){
    cy.get(homeElements.listaProdutos());
  }

}

export default HomePage;