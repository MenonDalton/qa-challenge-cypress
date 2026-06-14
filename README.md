# Automação de Testes - Cypress com Cucumber

Este repositório contém a resolução dos desafios de automação Web e API propostos para o processo seletivo da F1RST.

## Pré-requisitos
* Node.js (versão LTS recomendada)
* Binário do Cypress disponível no ambiente local

## Estrutura do Projeto
O framework foi desenvolvido utilizando JavaScript, Cypress e o preprocessador do Cucumber para suporte a BDD (Behavior-Driven Development).

* `cypress/e2e/features/`: Arquivos `.feature` contendo a especificação dos cenários em Gherkin.
* `cypress/e2e/step_definitions/`: Arquivos `.js` com a implementação da lógica dos testes.
* `cypress.config.js`: Arquivo de configuração global do Cypress.

## Instalação
Para instalar as dependências do projeto, execute o comando abaixo na raiz do diretório:
```bash
npm install