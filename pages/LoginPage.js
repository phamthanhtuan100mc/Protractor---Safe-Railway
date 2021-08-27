let LoginPage = function () {

    let usernameInput = element(by.id('username'));
    let passwordInput = element(by.id('password'));
    let loginButton = element(by.xpath('//input[@value=\'login\']'));

    this.inputUsername = function (username) {
        usernameInput.sendKeys(username);
    }

    this.inputPassword = function (password) {
        passwordInput.sendKeys(password);
    }

    this.clickLogin = function () {
        loginButton.click();
    }

    this.inputEmailPassword = function (username, password) {
        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password);
    }

    this.login = function (username, password) {
        usernameInput.sendKeys(username);
        passwordInput.sendKeys(password);
        loginButton.click();
    }

    this.checkMessageError = function (message) {
        var errorMessage = element(by.className('message error LoginForm'));
        expect(errorMessage.getText()).toBe(message);
    }

};

module.exports = new LoginPage();