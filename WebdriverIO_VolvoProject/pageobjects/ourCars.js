const  fnUtil = require('../genericMethods/elementUtil');
class OurCars{

    //page locators:
    get tabOurCars(){return $('button[id="nav:topNavCarMenu"]')}
    get textElectric(){return $('h2[text="Electric]')}
    get acceptClick(){return $('button[aria-label="Accept"]')}
    get ourCarsTab(){return $('button[data-autoid="nav:topNavCarMenu"]')}

    //page menthos:
    async goToOurCars(){
        fnUtil.doClick(this.tabOurCars);
        await this.textElectric.waitForDisplayed({ timeout: 3000 })
        await browser.pause(10000);
    }

    async accept(browser){
        await browser.waitUntil(() => this.acceptClick.isClickable())
        await this.acceptClick.click();
        await browser.pause(5000);
    }


    async goToOurCars(browser){
        const _acceptClick = await $('button[aria-label="Accept"]')        
        await browser.waitUntil(() => _acceptClick.isClickable())
        await _acceptClick.click();

        const ourCarsTab = await $('button[data-autoid="nav:topNavCarMenu"]')        
        await browser.waitUntil(() => ourCarsTab.isClickable())
        await ourCarsTab.click();
    }

    async getCarNamesElectric(browser){
        const linkElectric = await $('button[aria-controls="site-nav-cars-menu-section-panel-0"]')
        await browser.waitUntil(() => linkElectric.isClickable())
        await browser.execute("arguments[0].click();", linkElectric);
        await browser.pause(5000);

        const linksEltrCars = await $$('#site-nav-cars-menu-section-panel-0 em')
        for (let index = 0; index < linksEltrCars.length; index++) {
            console.log(await linksEltrCars[index].getText());  
        }
    }
}

module.exports = new OurCars();