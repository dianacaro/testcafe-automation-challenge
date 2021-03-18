import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS, BASE_URL, INVALID_USER_ERROR_MSG, 
    EMPTY_USERNAME_ERROR_MSG, EMPTY_PASSWORD_ERROR_MSG } from '../data/Constants'

fixture ('Login feature testing')
    .page(BASE_URL)

test('Users can login using valid credentials', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(productsPage.productsTitle.exists).ok()
})

test('Users can\'t login using invalid user', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).eql(INVALID_USER_ERROR_MSG)
})

test('Users can\'t login leaving email information empty', async t => {
    await loginPage.submitLoginWithEmptyUsername(CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).eql(EMPTY_USERNAME_ERROR_MSG)
})

