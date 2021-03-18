import { Selector } from 'testcafe'

class FinishPage {
    constructor(){
        this.confirmationMessage = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
    }
}

export default new FinishPage()