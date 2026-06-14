#  QA Challenge - Automação de Testes (Web & API)

Este repositório contém a solução do desafio técnico de Quality Assurance, englobando o planejamento de cenários de teste em formato BDD (Gherkin), a automação de testes funcionais Web e a validação automatizada de serviços de API, seguindo estritamente o escopo solicitado.

---

##  Tecnologias e Ferramentas Utilizadas

- **Framework de Testes:** [Cypress](https://www.cypress.io/) (Automação Web)
- **Abordagem de Desenvolvimento:** BDD (Behavior-Driven Development) integrado via Gherkin
- **Validação de API:** [Postman](https://www.getpostman.com/) com asserções automatizadas via scripts em JavaScript (Post-response)

---

##  Planejamento de Cenários (Gherkin / BDD)

### Escopo Web: Advantage Online Shopping
Os cenários mapeados cobrem a jornada principal do usuário (Busca de produtos, Carrinho e Checkout), garantindo a estabilidade das principais regras de negócio solicitadas:
- **Cenário 001:** Realizar a busca de um produto existente (Positivo)
- **Cenário 002:** Realizar a busca de um produto inexistente (Negativo)
- **Cenário 003:** Incluir produto no carrinho com sucesso (Positivo)
- **Cenário 004:** Validar produtos no carrinho na tela de pagamento (Positivo)

###  Escopo API: Catalog Search
Modelagem estrita focando em fluxos de sucesso, dados vazios e tratamento de exceções para o endpoint de catálogo:
- **Cenário 001:** Validar pesquisa de produtos por palavra-chave válida (Positivo)
- **Cenário 002:** Validar pesquisa sem correspondência de produtos (Negativo)
- **Cenário 003:** Validar envio de parâmetro de busca vazio (Exceção)

> **Nota de Contingência:** Devido à indisponibilidade e erro 500 no ambiente original do endpoint `/catalog/api/v1/products/search`, os cenários de API foram validados com sucesso utilizando a API pública correlata **DummyJSON** (`https://dummyjson.com/products/search`), assegurando a mesma fidelidade de parâmetros e validações contratuais de dados.

---

##  Como Executar o Projeto Web (Cypress)

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clonar o repositório:**
```bash
   git clone [https://github.com/MenonDalton/qa-challenge-cypress.git](https://github.com/MenonDalton/qa-challenge-cypress.git)