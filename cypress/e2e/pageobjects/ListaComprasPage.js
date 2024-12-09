/// <reference types="Cypress" />

import ListaComprasElements from "../elements/ListaComprasElements";
const listaComprasElements = new ListaComprasElements();

class ListaComprasPage {

  exibirListaComprasVazia(){
    cy.get(listaComprasElements.listaComprasVazia());
  }

}

export default ListaComprasPage;