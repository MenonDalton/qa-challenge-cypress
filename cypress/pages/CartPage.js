class CartPage {
  elements = {
    itemName: () => cy.get('.inventory_item_name'),
    removeBtn: () => cy.get('[data-test^="remove-"]'),
    cartItem: () => cy.get('.cart_item')
  }

  validarItemNoCarrinho(nomeEsperado) {
    this.elements.itemName().should('have.text', nomeEsperado);
  }

  removerItemDoCarrinho() {
    this.elements.removeBtn().click();
  }

  validarCarrinhoVazio() {
    this.elements.cartItem().should('not.exist');
  }
}
export default new CartPage();