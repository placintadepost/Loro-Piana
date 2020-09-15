package Pages;

import Base.Methods;
import com.aventstack.extentreports.Status;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends Methods {

    public static WebDriverWait wait = new WebDriverWait(driver, 10);

    public static String tempUser = "tejowes385@fft-mail.com";
    public static String tempPass = "QAZxsw123";

    private static final By homePageLoginIcon = By.className("btn-account");
    private static final By homePageLoginButton = By.cssSelector("a[aria-label=\"login\"]");
    private static final By userName = By.cssSelector("input[id='j_username']");
    private static final By password = By.cssSelector("input[id='j_password']");
    private static final By loginBtn = By.cssSelector("button[aria-label='login']");

    private static final By menuItemMan = By.xpath("(//li[@id=\"New_Man\"])[1]");
    private static final By menuSubItemBlazers = By.xpath("(//a[@href=\"https://us.loropiana.com/en/c/man/blazers\"])[2]");
    private static final By secondBlazer = By.xpath("(//img[@class=\"item-image\"])[2]");

    private static final By homePageLogoutBtn = By.cssSelector("a[aria-label=\"log out\"]");

    public static WebElement homePageLogoutBtn() {

        return driver.findElement(homePageLogoutBtn);
    }

    public static WebElement secondBlazer() {

        return driver.findElement(secondBlazer);
    }

    public static WebElement menuItemMan() {

        return driver.findElement(menuItemMan);
    }

    public static WebElement menuSubItemBlazers() {

        return driver.findElement(menuSubItemBlazers);
    }

    public static WebElement homePageLoginIcon() {

        return driver.findElement(homePageLoginIcon);
    }

    public static WebElement homePageLoginButton() {

        return driver.findElement(homePageLoginButton);
    }

    public static WebElement userName() {

        return driver.findElement(userName);
    }

    public static WebElement password() {

        return driver.findElement(password);
    }

    public static WebElement loginBtn() {

        return driver.findElement(loginBtn);
    }


    public static void loginHome() {



        try {
            childTest = parentTest.createNode("Access Home Page and log into account");

            driver.get(homePage);

            homePageLoginIcon().click();
            WebElement clickOnLogin = wait.until(ExpectedConditions.elementToBeClickable(homePageLoginButton()));
            clickOnLogin.click();

            justWait(2000);

            userName().sendKeys(tempUser);
            password().sendKeys(tempPass);
            loginBtn().click();

            childTest.log(Status.PASS, "PASS: Login was successful");

        } catch (Error failStatus) {

            System.out.println("User cannot login");

            childTest.log(Status.FAIL, "FAIL: User cannot login");

        }
    }

    public static void accessBlazers() {

        try {

            childTest = parentTest.createNode("Access Menswear - Blazers section");

//            Actions actions = new Actions(driver);
//            justWait(2000);
//            WebElement menuMan = wait.until(ExpectedConditions.elementToBeClickable(menuItemMan()));
//            actions.moveToElement(menuMan).perform();
//            justWait(2000);
//            actions.moveToElement(menuSubItemBlazers()).click().build().perform();

            driver.get("https://us.loropiana.com/en/c/man/blazers");

            justWait(2000);

            wait.until(ExpectedConditions.urlContains("blazers"));

            WebElement blazer = wait.until(ExpectedConditions.elementToBeClickable(secondBlazer()));
            blazer.click();

            childTest.log(Status.PASS, "PASS: Successfully accessed Menswear - Blazers section");

        } catch (Error FailStatus) {

            System.out.println("Cannot access Menswear section");

            childTest.log(Status.FAIL, "FAIL: Cannot access Menswear section");


        }

    }

    public static void logout() {

        try {

            childTest = parentTest.createNode("Logout/login and verify item in cart");

            homePageLoginIcon().click();
            homePageLogoutBtn().click();

            childTest.log(Status.PASS, "PASS: Logout/login and item in cart verified");

        } catch (Error FailStatus) {

            System.out.println("Logout/login and item in cart not verified");

            childTest.log(Status.FAIL, "FAIL: Logout/login and item in cart not verified");

        }


    }
}
