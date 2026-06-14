import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que acesso a página de login", () => {
  cy.visit("/");
});

When("insiro o usuário {string} e a senha {string}", (user, pass) => {
  LoginPage.preencherLogin(user, pass);
});

When("tento logar sem preencher usuário e senha", () => {
  LoginPage.elements.loginBtn().click();
});

Then("devo ser direcionado para a página de produtos", () => {
  cy.url().should('include', '/inventory.html');
});

Then("devo ver a mensagem de erro {string}", (msgErro) => {
  LoginPage.elements.errorMsg().should('be.visible').and('contain.text', msgErro);
});