import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado no sistema", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("busco pelo produto {string} e adiciono ao carrinho", (produto) => {
  cy.contains(".inventory_item_name", produto).should("be.visible");
  cy.contains(".inventory_item", produto).find("button").click();
});

When("percorro o fluxo até a tela de pagamento", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();
  
  cy.get('[data-test="firstName"]').type("Dalton");
  cy.get('[data-test="lastName"]').type("QA");
  cy.get('[data-test="postalCode"]').type("01000000");
  cy.get('[data-test="continue"]').click();
});

Then("o produto {string} deve ser exibido corretamente no resumo do checkout", (produtoEsperado) => {
  cy.get(".cart_item").should("be.visible");
  cy.contains(".inventory_item_name", produtoEsperado).should("be.visible");
});