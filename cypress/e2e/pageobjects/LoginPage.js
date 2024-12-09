/// <reference types="Cypress" />

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements();
const url = Cypress.config("baseUrl");

class LoginPage {
  acessarSite() {
    cy.visit(url);
  }

  preencherEmail(email){
    cy.get(loginElements.campoEmail()).type(email);
  }

  preencherSenha(senha){
    cy.get(loginElements.campoSenha()).type(senha);
  }

  clicarBotaoEntrar(){
    cy.get(loginElements.botaoEntrar()).click();
  }

}

export default LoginPage;