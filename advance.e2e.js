describe('Advance Testing', async() => {
    // beforeEach(async() => {
    //     await browser.url('https://the-internet.herokuapp.com/upload')
    // })

    beforeEach(async() => {
        await loadWebSite()
    })

    it("File Upload 1", async() => {
        //await browser.url('https://the-internet.herokuapp.com/upload')

        const filePath = './Screen.png'
        const remoteFilePath = await browser.uploadFile(filePath, '#file-upload', '#file-submit')

        await (await $('#file-upload')).setValue(remoteFilePath, '#file-upload', '#file-submit')
        await (await $('#file-submit')).click()
        await browser.pause(5000)
    })
    it("File Upload 2", async() => {
        const filePath = './Screen.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        await browser.pause(5000)

    })
    it("File Upload 3", async() => {
        const filePath = './Screen.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        await browser.pause(5000)

    })
    it("Display Title and Url", async() => {
        const results = await browser.getTitleAndUrl()
        console.log("TITLE = " + results.title)
        console.log("URL = " + results.url)

        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)
    })
    it("Change Browser Session", async() => {
        console.log('SESSION BEROFE RELOAD ' + browser.sessionId)
        await browser.reloadSession()
        console.log("SESSION AFTER RELOAD " + browser.sessionId)
    })
    it("Create and Switch New Window", async() => {
        await browser.url("https://google.com")
        await browser.newWindow("https://webdriver.io")
        await browser.pause(3000)
        await browser.switchWindow('google.com')
        await browser.pause(3000)
    })
    it("Network Throttle", async() => {
        await browser.throttle('Regular2G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        await browser.throttle('Regular4G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        await browser.throttle('offline')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)
    })
    it("Execute Javascript Code", async() => {
        const result = await browser.execute((a, b) => {
            return a + b

        }, 5, 10)
        await expect(result).toBe(15)
    })
    it("Excecute Async Javascript Code", async() => {
        const result = await browser.executeAsync((a, b, done) => {
            setTimeout(() => {
                done(a + b)
            }, 3000)
        }, 5, 10)
        await expect(result).toBe(15)
    })
})

async function loadWebSite() {
    await browser.url('https://the-internet.herokuapp.com/upload')
}