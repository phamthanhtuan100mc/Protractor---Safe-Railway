import { Account } from '../conf/constant';

let HomePage = require('../pages/HomePage.js');
let LoginPage = require('../pages/LoginPage.js');

beforeEach(function () {
    // Navigate to QA Railway Website each testcase
    HomePage.get('http://railwaysg2.somee.com/Page/HomePage.cshtml');
});

describe('Positive case', function () {

    it('User can log into Railway with valid ID and password', function () {

        HomePage.clickLoginTab();

        LoginPage.inputEmailPassword(Account.username, Account.password);

        LoginPage.clickLogin();

        HomePage.checkTitleText('Welcome to Safe Railway');

        HomePage.clickLogoutTab();

    });

    it('User is redirected to Book tiket page after log in', function () {

        HomePage.clickBookTicketTab();

        HomePage.checkTitleText('Login page');

        LoginPage.login(Account.username, Account.password);

        HomePage.checkTitleText('Book ticket');

        HomePage.clickLogoutTab();

    });

    it('User is redirected to Home page after log out', function () {

        HomePage.clickLoginTab();

        LoginPage.login(Account.username, Account.password);

        HomePage.clickContactTab();

        HomePage.clickLogoutTab();

        HomePage.checkTabNotExist('Log out');

    });

});

describe('Negative case', function () {

    it('User cannot login with blank Username textbox', function() {

        HomePage.clickLoginTab();

        LoginPage.inputPassword(Account.password);

        LoginPage.clickLogin();

        LoginPage.checkMessageError('There was a problem with your login and/or errors exist in your form.');


    });

    it('User cannot log into Railway with invalid password', function () {

        HomePage.clickLoginTab();
        
        LoginPage.inputEmailPassword(Account.username, Account.invalidPassword);
        
        LoginPage.clickLogin();
        
        LoginPage.checkMessageError('There was a problem with your login and/or errors exist in your form.');

    });

    it('System shows message when user enters wrong password serveral times', function() {

        HomePage.clickLoginTab();

        LoginPage.inputEmailPassword(Account.username, Account.invalidPassword);

        LoginPage.clickLogin();
        
        LoginPage.inputPassword(Account.invalidPassword);
        
        LoginPage.clickLogin();
        
        LoginPage.inputPassword(Account.invalidPassword);
        
        LoginPage.clickLogin();
        
        LoginPage.inputPassword(Account.invalidPassword);
        
        LoginPage.clickLogin();
        
        LoginPage.checkMessageError('You have used 4 out of 5 login attempts. After all 5 have been used, you will be unable to login for 15 minutes.');

    });

});