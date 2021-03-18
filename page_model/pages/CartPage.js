import { Selector } from 'testcafe'

class CartPage {
    constructor(){
        this.cartTitle = Selector('.subheader').withExactText('Your Cart')
        this.cartItem = Selector('.cart_item')
        this.checkoutButton = Selector('.btn_action.checkout_button')
    }
}

export default new CartPage()