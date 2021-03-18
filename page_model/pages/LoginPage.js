import { Selector, t } from 'testcafe'

class LoginPage {
    constructor (){
        this.loginLogo = Selector('.login_logo')
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorButton = Selector('.error-button')
        this.errorMessage = Selector('h3').withText("Epic sadface: ")
    }

    submitLoginForm = async (username, password) => {

        await t
        .typeText(this.usernameField, username, {paste:true})
        .typeText(this.passwordField, password, {paste:true})
        .click(this.loginButton)
    }

    submitLoginWithEmptyUsername =  async (password) => {

        await t
        .typeText(this.passwordField, password, {paste:true})
        .click(this.loginButton)
    }
}

export default new LoginPage()