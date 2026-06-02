import { test, expect } from '../config/fixtures';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';
import { CartPage } from '../pages/cart-page';

/**
 * E-Commerce Checkout Flow Test
 * Builder Agent Generated
 * Traceability Report: ecommerce-add-to-cart.json
 * Confidence: 100%
 */
test.describe('E-Commerce Add to Cart Flow', () => {

  test('User can search for a MacBook and add it to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Flow Step 1: Navigate to Homepage
    await homePage.navigate();

    // Flow Step 2: Search for 'macbook'
    await homePage.searchForProduct('macbook');

    // Flow Step 3: Click 'MacBook' product
    await productPage.clickProduct();
    
    // Validate URL source from exploration report
    await expect(page).toHaveURL(/product_id=43/);

    // Flow Step 4: Click 'Add to Cart'
    await productPage.addToCart();

    // Flow Step 5: Wait for Success Alert (Risk addressed: short-lived notification)
    await expect(productPage.successAlert).toBeVisible({ timeout: 4000 });

    // Flow Step 6: Click 'View Cart'
    await productPage.goToCart();
    
    // Validate URL source from exploration report
    await expect(page).toHaveURL(/route=checkout\/cart/);

    // Final Assertion: Checkout button is visible on cart page
    await expect(cartPage.checkoutButton).toBeVisible();
  });

});
