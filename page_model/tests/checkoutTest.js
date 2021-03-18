import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { CREDENTIALS, BASE_URL, USER_INFORMATION, OVERVIEW_TITLE, CONFIRMATION_MESSAGE } from '../data/Constants'
import cartPage from '../pages/CartPage'
import informationPage from '../pages/InformationPage'
import overviewPage from '../pages/OverviewPage'
import finishPage from '../pages/FinishPage'

fixture ('Login feature testing')
    .page(BASE_URL)
    .beforeEach(async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Fill User\'s Information', async t => {
    const cartItem = 1;
    await productsPage.addItemToCart(cartItem)
    await t.click(cartPage.checkoutButton)
    await informationPage.fillUserForm(USER_INFORMATION.VALID_USER_INFO.FIRST_NAME, USER_INFORMATION.VALID_USER_INFO.LAST_NAME, USER_INFORMATION.VALID_USER_INFO.ZIP_CODE) 
    await t.expect(overviewPage.overviewTitle.innerText).eql(OVERVIEW_TITLE)
})

test('User complete a purchase', async t => {
    await productsPage.addMultipleItemsToCart(1,2,3)
    await t.click(cartPage.checkoutButton)
    await informationPage.fillUserForm(USER_INFORMATION.VALID_USER_INFO.FIRST_NAME, USER_INFORMATION.VALID_USER_INFO.LAST_NAME, USER_INFORMATION.VALID_USER_INFO.ZIP_CODE) 
    await t
        .click(overviewPage.finishButton)
        .expect(finishPage.confirmationMessage.innerText).eql(CONFIRMATION_MESSAGE)
})
