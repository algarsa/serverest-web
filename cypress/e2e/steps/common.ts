import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageobjects/LoginPage";

const loginPage = new LoginPage();

Given("que acesso o site da Severest e realizo o Login {} {}", (email, senha) => {
  loginPage.acessarSite();
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
  loginPage.clicarBotaoEntrar();
});
