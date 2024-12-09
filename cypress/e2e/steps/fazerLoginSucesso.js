import HomePage from "../pageobjects/HomePage";
import LoginPage from "../pageobjects/LoginPage";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = new LoginPage;
const homePage = new HomePage;

Then("o site deve permitir a entrada do usuario", () => {
    homePage.exibirClasseJumbotron();
});