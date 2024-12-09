import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";
const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = new LoginPage;
const homePage = new HomePage;

When("preencho o campo pesquisar produto {} e clico no botao Pesquisar", (produto) => {
    homePage.preencherPesquisarProduto(produto);
    homePage.clicarBotaoPesquisar();
});

Then("o site deve retornar lista de produtos", () => {
    homePage.exibirListaProdutos();
});