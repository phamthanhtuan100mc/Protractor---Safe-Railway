let HomePage = function () {

    let homeButton = element(by.linkText('Home'));
    let faqButton = element(by.linkText('FAQ'));
    let contactButton = element(by.linkText('Contact'));
    let timeTableButton = element(by.linkText('Timetable'));
    let ticketPriceButton = element(by.linkText('Ticket price'));
    let bookTicketButton = element(by.linkText('Book ticket'));
    let registerButton = element(by.linkText('Register'));
    let loginButton = element(by.linkText('Login'));
    let changePasswordButton = element(by.linkText('Change password'));
    let logoutButton = element(by.linkText('Log out'));

    let titleText = element(by.xpath('//div[@id=\'content\']/h1'));

    this.get = function (url) {
        browser.get(url);
    }

    this.clickHomeTab = function () {
        homeButton.click();
    }

    this.clickFAQTab = function () {
        faqButton.click();
    }

    this.clickContactTab = function () {
        contactButton.click();
    }

    this.clickTimeTableTab = function () {
        timeTableButton.click();
    }

    this.clickTicketPriceTab = function () {
        ticketPriceButton.click();
    }

    this.clickBookTicketTab = function () {
        bookTicketButton.click();
    }

    this.clickRegitserTab = function () {
        registerButton.click();
    }

    this.clickLoginTab = function () {
        loginButton.click();
    }

    this.clickChangePasswordTab = function () {
        changePasswordButton.click();
    }

    this.clickLogoutTab = function () {
            logoutButton.click();
    }

    /**
     * 
     * @param {*} tabName require to input exactly the tab name
     */
    this.checkTabNotExist = function (tabName) {
        // expect(element(by.linkText(tabName))).isPresent().toBe(false);
        expect(element(by.linkText(tabName)).isPresent()).toBe(false);
    }

    this.checkTitleText = function (content) {
        expect(titleText.getText()).toEqual(content);
    }

};

module.exports = new HomePage();