describe.skip("Login Flow", () =>{
    before(async() => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })
    it("Should not login with invalid username and password", async () => {
        await browser.waitAndClick('#signin_button')
        await $('#login_form').waitForDisplayed()
        await $('#user_login').setValue('test')
        await $('#user_password').setValue('test')
        await $('input[type="submit"]').click()

        const errorMessage = await $('.alert-error')
        await expect(errorMessage).toHaveTextContaining(
            'Login and/or password are wrong'
        )
    })
    it("Error Login", async () => {
        const email = 'test@test.com'
        await browser.waitAndClick('*=Forgot')
        await $('#user_email').waitForDisplayed()
        await (await $('#user_email')).setValue(email)
        await $('input[type="submit"]').click()

        const message = await $('.span6')
        await expect(message).toHaveTextContaining(
            `email: ${email}`
        )
    })
})