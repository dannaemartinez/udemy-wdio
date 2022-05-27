describe.skip("Feedback Form", () =>{
    it("Should submit feedback form eith all the values", async() => {
        const name = 'Dannae'
        const email= 'test@test.com'
        const subject = 'test'
        const message = 'message'

        await browser.url('http://zero.webappsecurity.com/index.html')
        await browser.waitAndClick('#feedback')
        
        await $('#name').setValue(name)
        await $('#email').setValue(email)
        await $('#subject').setValue(subject)
        await $('#comment').setValue(message)
        await $('input[type="submit"]').click()

        await expect(browser).toHaveUrlContaining(
            'sendFeedback.html'
        )

    })
})
