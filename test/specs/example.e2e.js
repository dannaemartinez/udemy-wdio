describe.skip('My first test suite', () => {
    it('My first wdio test', async() => {
        //TODO
        let myUrl = 'https://www.example.com'
        let smallPause = 2000
        let bigPause = 5000

        await browser.url(myUrl)
        await browser.pause(smallPause)

        await expect(browser).toHaveTitleContaining("Example Domain")
        await expect(browser).toHaveUrlContaining("example.com")

        let pageElement = await $('h1')
        await expect(pageElement).toExist()
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Example')

    });

    it("Forms and Inputs", async() => {
        await browser.url('https://www.saucedemo.com/')

        let usernameInput = await $('#user-name')
        let passwordInput = await $('#password')
        let loginButton = await $('#login-button')

        await usernameInput.setValue("standard_user")
        await passwordInput.setValue("secret_sauce")
        await loginButton.click()

        let inventoryContainer = await $('#inventory_container')

        await expect(inventoryContainer).toBeDisplayed()
    })

    it("Select Box and Checkbox", async() => {
        await browser.url("https://devexpress.github.io/testcafe/example/")

        let selectBox = await $('#preferred-interface')
        await selectBox.selectByVisibleText('Both')

        let option = await $('option=Both')
        await expect(option).toBeSelected()

    })

    it("Set Browser Size", async() => {
        let width = 800
        let height = 600
        await browser.setWindowSize(width, height)
        await browser.url('https://www.example.com')

        let selector = await $('h1')
        await selector.waitForExist()
        await selector.waitForDisplayed()

        await browser.pause(5000)
    })

    it("Device Emulation", async() => {
        let mobile = [375, 812]
        let tablet = [1024, 768]
        let desktop = [1650, 1050]

        //mobile device
        await browser.setWindowSize(mobile[0], mobile[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)

        //tablet device
        await browser.setWindowSize(tablet[0], tablet[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)

        //desktop device
        await browser.setWindowSize(desktop[0], desktop[1])
        await browser.url('https://www.example.com')
        await browser.pause(2000)
    })
    it("Screenshots", async() => {
        await browser.url('https://www.example.com')
        await browser.saveScreenshot("Screen.png")

        let title = await $('h1')
        await title.saveScreenshot("Title.png")

    })
});