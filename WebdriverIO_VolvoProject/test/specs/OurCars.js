/*
Test script name        : ourCars
Test script description  : Its verify cars name in Our cars tab-->Electric 
Pre-request              : URL
Authour name            : Murali Jasthi
*/
const assert = require('assert');
const fnOurCars = require('../../pageobjects/ourCars');
const LaunchApp =  require('../../genericMethods/launchApplication');

browser = this.browser;
describe("Volvo Test Automation task", function() {
    before("Launch Applicvation", async() => {
        LaunchApp.openApplicationWithAccpect();
    });

    it("Navigate to Our Cars page",async function(){

        fnOurCars.goToOurCars(browser);
    });

    it("Validate cars in Electric", async function(){
        fnOurCars.getCarNamesElectric(browser);

    });

});