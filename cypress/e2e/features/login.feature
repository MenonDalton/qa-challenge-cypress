#language: pt
Funcionalidade: Tela de Login

  Contexto:
    Dado que acesso a página de login

  Cenário: Autenticação com sucesso (Positivo)
    Quando insiro o usuário "standard_user" e a senha "secret_sauce"
    Então devo ser direcionado para a página de produtos

  Cenário: Usuário bloqueado (Negativo)
    Quando insiro o usuário "locked_out_user" e a senha "secret_sauce"
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  Cenário: Usuário incorreto (Negativo)
    Quando insiro o usuário "usuario_invalido" e a senha "secret_sauce"
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Cenário: Senha incorreta (Negativo)
    Quando insiro o usuário "standard_user" e a senha "senha_errada"
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

  Cenário: Campos em branco (Negativo)
    Quando tento logar sem preencher usuário e senha
    Então devo ver a mensagem de erro "Epic sadface: Username is required"