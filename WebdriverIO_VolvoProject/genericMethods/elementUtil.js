
 class ElementUtil {
    async doIsDisplayed(element){
        await element.waitForDisplayed({timeout: 5000});
    }
    
    async doGetText(element){
        return await element.getText();
    }

    async doClick(element){
        return await element.click();
    }

    async jsClick(browser,element){
        browser.execute("arguments[0].click();", element)
    }
}

module.exports = new ElementUtil();