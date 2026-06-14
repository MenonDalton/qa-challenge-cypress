#language: pt
Funcionalidade: Fluxo de Compras

  Cenário: Adicionar produto ao carrinho e validar no checkout (Positivo)
    Dado que estou logado no sistema
    Quando busco pelo produto "Sauce Labs Backpack" e adiciono ao carrinho
    E percorro o fluxo até a tela de pagamento
    Então o produto "Sauce Labs Backpack" deve ser exibido corretamente no resumo do checkout

  Cenário: Remover produto de dentro do carrinho (Positivo)
    Dado que estou logado no sistema
    Quando busco pelo produto "Sauce Labs Bike Light" e adiciono ao carrinho
    E percorro o fluxo até a tela de pagamento
    Então o produto "Sauce Labs Bike Light" deve ser exibido corretamente no resumo do checkout