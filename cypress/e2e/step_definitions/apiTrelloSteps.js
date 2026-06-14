import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let responseStore;

When("envio um GET para o endpoint {string}", (idAction) => {
  cy.request({
    method: "GET",
    url: `https://api.trello.com/1/actions/${idAction}`,
    failOnStatusCode: false,
    log: false
  }).then((res) => {
    responseStore = res;
  });
});

Then("o status code deve ser {int}", (statusCode) => {
  expect(responseStore.status).to.eq(statusCode);
});

Then("o campo {string} dentro de {string} deve ser {string}", (campo, estrutura, valorEsperado) => {
  expect(responseStore.body).to.have.property("data");
  
  const dadosInternos = responseStore.body.data;
  expect(dadosInternos).to.have.property(estrutura);
  expect(dadosInternos[estrutura]).to.have.property(campo);
  expect(dadosInternos[estrutura][campo]).to.eq(valorEsperado);
});