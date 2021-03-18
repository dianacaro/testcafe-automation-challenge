import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS, BASE_URL } from '../data/Constants'

fixture ('Login feature testing')
    .page(BASE_URL)
    .beforeEach(async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })


test('Users can logout from product\'s page', async t => {    
    await t
        .click(productsPage.menuButton)
        .click(productsPage.logoutLink)
        
    await t.expect(loginPage.loginLogo.exists).ok()
})