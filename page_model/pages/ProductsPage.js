import { Selector, t } from 'testcafe'

class ProducstPage {
    constructor(){
        this.productsTitle = Selector('.product_label')
        this.menuButton = Selector('.bm-burger-button')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartIcon = Selector('.fa-shopping-cart')
        this.addToCartButton = Selector('.btn_primary')
    }

    addItemToCart = async (itemNumber) => {

        await t
        .click(this.addToCartButton.nth(itemNumber))
        .click(this.shoppingCartIcon)
    }

    addMultipleItemsToCart = async (item1, item2, item3) => {

        await t
        .click(this.addToCartButton.nth(item1))
        .click(this.addToCartButton.nth(item2))
        .click(this.addToCartButton.nth(item3))
        .click(this.shoppingCartIcon)
    }
}

export default new ProducstPage()