class InventoryPage {
  elements = {
    cartBadge: () => cy.get('.shopping_cart_link')
  }

  adicionarProduto(nomeProduto) {
    cy.contains('.inventory_item', nomeProduto)
      .find('button[id^="add-to-cart"]')
      .click();
  }

  irParaO_Carrinho() {
    this.elements.cartBadge().click();
  }
}
export default new InventoryPage();