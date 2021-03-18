import { Selector } from 'testcafe'

class OverviewPage {
    constructor(){
        this.overviewTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new OverviewPage()