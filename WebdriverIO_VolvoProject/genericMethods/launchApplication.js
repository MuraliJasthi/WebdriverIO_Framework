const  Cookies = require('../genericMethods/elementUtil');
const fnCookies = require('../pageobjects/CookiesWindow');
//const generalProp = require('../../../pageobjects/properties/general.locators');

class LaunchApp{

    get alert(){ return $('.optanon-alert-box-bg')}

    get btnAccept(){ return $('button[aria-label="Accept"]')} 

    async openApplication(){
        await browser.url(browser.config.baseUrl);
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle(browser.config.titleUrl);
        const winCookies = await $(this.alert);
        Cookies.doIsDisplayed(winCookies);
    }

    async openApplicationWithAccpect(){
        await browser.url(browser.config.baseUrl);
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle(browser.config.titleUrl);
        const winCookies = await $(this.alert);
        Cookies.doIsDisplayed(winCookies);
        fnCookies.clickAccept();

    }
}

module.exports = new LaunchApp();