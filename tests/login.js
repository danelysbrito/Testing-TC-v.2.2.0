
const { Selector} = require("testcafe") ;
import LoginPage from "../pages/LoginPage";

fixture("Login Suite").page("./");

test ( "Valid Login", async t => {   
    LoginPage.login ("standard_user", "secret_sauce");
    await t.expect(Selector(".title").innerText).eql("PRODUCTS");
        
});

test ( "Invalid Login", async t => {   
    LoginPage.login ("test_user", "stest_sauce");
    await t
     .takeScreenshot("./screenshots")
    .expect(Selector('h3[data-test="error"]').innerText)
    .eql("Epic sadface: Username and password do not match any user in this service");
        
});
