import { Selector, t } from 'testcafe'

class InformationPage {
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        
    }

    fillUserForm = async (fistName, lastName, zipCode) => {

        await t
        .typeText(this.firstNameField, fistName, {paste:true})
        .typeText(this.lastNameField, lastName, {paste:true})
        .typeText(this.zipCodeField, zipCode, {paste:true})
        .click(this.continueButton)
    }
}

export default new InformationPage()