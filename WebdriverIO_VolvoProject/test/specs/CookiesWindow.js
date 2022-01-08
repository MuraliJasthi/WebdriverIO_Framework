/*
Test script name        : CookiesWindow
Test script description  : Validate Cokkies window accept 
Pre-request              : URL
Authour name            : Murali Jasthi
*/
const assert = require('assert');
const fnCookies = require('../../pageobjects/CookiesWindow');
const LaunchApp =  require('../../genericMethods/launchApplication');
const TD = require('../../testdata/cookiesTestData');


describe("Volvo Test Automation task", function() {
    before("Launch Applicvation", async() => {
        LaunchApp.openApplication();
    });

    it('Validate text on Cookies popup dailog window', async function() {
        fnCookies.getCookiesAlertMsg().then(_alrttext=>{
            assert.equal(_alrttext,TD.cookiesAlertText); 
        });
         
    });

    it('Validate Accept button', async function(){
        fnCookies.getAcceptBtnText().then(_acceptTitle =>{
            assert.equal(_acceptTitle,TD.acceptTitle);
        });           
    });

    it('Validate Cookie Settings button', async function(){
        fnCookies.getCookiesSettText().then(_CookiesSettTitle =>{
            assert.equal(_CookiesSettTitle,TD.cookiesSettTile);
        });
    });

    it('Accept Cookies', async function(){
        fnCookies.clickAccept();
    });
})