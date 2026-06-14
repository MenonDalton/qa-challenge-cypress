class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    errorMsg: () => cy.get('[data-test="error"]')
  }

  preencherLogin(user, password) {
    if (user) this.elements.usernameInput().type(user);
    if (password) this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}
export default new LoginPage();