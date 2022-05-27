describe('Sasuce demo product Order', () => {
    before(async () =>{
        await browser.url("https://www.saucedemo.com/")
        await browser.sauceLogin()
    })
    after(async () => {
        await browser.sauceLogout()
    })
    it('Should complete prod order', async () => {
        await (await $('#inventory_container')).waitForDisplayed()
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await (await $('.shopping_cart_link')).click()

        await (await $('.cart_list')).waitForDisplayed()
        await (await $('[data-test="checkout"]')).click()

        const firstName = "Dannae"
        const lastName = "Martinez"
        const postalCode = "76806"

        await (await $('.checkout_info')).waitForDisplayed()
        await (await $('[data-test="firstName"]')).setValue(firstName)
        await (await $('[data-test="lastName"]')).setValue(lastName)
        await (await $('[data-test="postalCode"]')).setValue(postalCode)
        await (await $('[data-test="continue"]')).click()

        await (await $('.cart_list')).waitForDisplayed()
        await (await $('.summary_info')).waitForDisplayed()
        await (await $('[data-test="finish"]')).click()

        const message = await $('.complete-header')
        await expect(message).toHaveTextContaining("THANK YOU FOR YOUR ORDER")
    })
})