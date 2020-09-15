package Tests;


import Base.Methods;
import Pages.HomePage;
import Pages.ItemPage;
import org.testng.annotations.Test;

public class TestLogin extends Methods {

    @Test(priority = 0)
    public void enterSiteAndLogin() {

        parentTest = extent.createTest("HerokuApp - Selenium/TestNG Framework");

        HomePage.loginHome();

    }

    @Test(priority = 1)
    public void addItemToCart() {

        HomePage.accessBlazers();
        ItemPage.addToCart();

    }

    @Test(priority = 2)
    public void logoutAndVerifyCart() {

        HomePage.logout();
        HomePage.loginHome();
        ItemPage.verifyCart();
        ItemPage.removeItem();

    }
}
