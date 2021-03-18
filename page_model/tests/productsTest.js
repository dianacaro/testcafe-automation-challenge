import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS, BASE_URL } from '../data/Constants'
import CartPage from '../pages/CartPage'

fixture ('Login feature testing')
    .page(BASE_URL)
    .beforeEach(async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })


test('Users can navigate to the shopping cart', async t => {
    await t.click(productsPage.shoppingCartIcon)
    await t.expect(CartPage.cartTitle.exists).ok()
})

test('Users can add a single item to the shopping cart', async t => {
    const cartItem = 0;
    await productsPage.addItemToCart(cartItem)
    await t.expect(CartPage.cartItem.nth(0).exists).ok()
})

test('Users can add multiple items to the shopping cart', async t => {
    await productsPage.addMultipleItemsToCart(1,2,3)
    await t
        .expect(CartPage.cartItem.nth(0).exists).ok()
        .expect(CartPage.cartItem.nth(1).exists).ok()
        .expect(CartPage.cartItem.nth(2).exists).ok()
})

