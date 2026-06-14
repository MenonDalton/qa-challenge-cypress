#language: pt
Funcionalidade: Validação API - Trello

  Cenário: Validar dados de uma Action específica (Positivo)
    Quando envio um GET para o endpoint "592f11060f95a3d3d46a987a"
    Então o status code deve ser 200
    E o campo "name" dentro de "list" deve ser "Professional"

  Cenário: Tentar buscar ID inexistente ou inválido (Negativo)
    Quando envio um GET para o endpoint "id_que_nao_existe"
    Então o status code deve ser 400