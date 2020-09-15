package Pages;

import Base.Methods;
import com.aventstack.extentreports.Status;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ItemPage extends Methods {

    public static WebDriverWait wait = new WebDriverWait(driver, 10);

    private static final By sizeDropDown = By.cssSelector("div[class*=\"sizevalue\"]");
    private static final By size48 = By.cssSelector("button[value=\"48\"]");
    private static final By shoppingbag = By.cssSelector("button[aria-label=\"Add to Shopping Bag\"]");
    private static final By cartIcon = By.cssSelector("span[class=\"with-items\"]");

    public static WebElement cartIcon() {

        return driver.findElement(cartIcon);
    }

    public static WebElement shoppingbag() {

        return driver.findElement(shoppingbag);
    }

    public static WebElement sizeDropDown() {

        return driver.findElement(sizeDropDown);
    }

    public static WebElement size48() {

        return driver.findElement(size48);
    }


    public static void addToCart() {

        try {

            childTest = parentTest.createNode("Add item to cart");

           justWait(3000);

            WebElement sizeDrop = wait.until(ExpectedConditions.elementToBeClickable(sizeDropDown()));

            sizeDrop.click();

            size48().click();

            WebElement shoppingBtn = wait.until(ExpectedConditions.elementToBeClickable(shoppingbag()));

            shoppingBtn.click();

            justWait(3000);

            childTest.log(Status.PASS, "PASS: Successfully added item to cart");

        } catch (Error FailStatus) {

            System.out.println("Cannot access Menswear section");

            childTest.log(Status.FAIL, "FAIL: Cannot add item to cart");

        }

    }

    public static void removeItem() {

        getElement("shopping-cart-icon").click();

        for(int i = 0; i <= 10; i++) {

            try {

                getElement("a[class='service t-caption t-grey']").click();
                justWait(1000);


            } catch (Exception failStatus) {

                break;

            }

        }


        getElement("shopping-cart-icon").click();

    }

    public static void verifyCart() {

        try {

            getElement("span[class='num-items']").isDisplayed();

            childTest.log(Status.PASS, "PASS: The item is still in the user's cart after logout and logging in");

        } catch (Error failStatus) {

            System.out.println("Failed validate item in cart after login");

            childTest.log(Status.FAIL, "FAIL: Failed validate item in cart after login");
        }

    }
}
