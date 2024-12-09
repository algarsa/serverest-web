import HomePage from "../pageobjects/HomePage";
import ListaComprasPage from "../pageobjects/ListaComprasPage";
import LoginPage from "../pageobjects/LoginPage";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = new HomePage;
const listaComprasHome = new ListaComprasPage;

When("clico no link Lista de Compras", () => {
    homePage.clicarLinkListaCompras();
});

Then("o site deve retornar a lista de compras", () => {
    listaComprasHome.exibirListaComprasVazia();
});