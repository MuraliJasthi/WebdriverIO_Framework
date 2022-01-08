const  Cookies = require('../genericMethods/elementUtil');
class CookiesPopWindow{

    //page locators:
    get accept(){ return $('#alert-box-message')}
    get btnAccept(){ return $('button[title="Accept"]')}
    get btnCookiesSett(){ return $('button[title="Cookie Settings"]')}


    //page methods:
    getCookiesAlertMsg(){
       return Cookies.doGetText(this.accept);
    }

    getAcceptBtnText(){
        return Cookies.doGetText(this.btnAccept);
    }

    getCookiesSettText(){
        return Cookies.doGetText(this.btnCookiesSett);
    }
    
    clickAccept(){
        Cookies.doClick(this.btnAccept);
    }

}

module.exports = new CookiesPopWindow()