import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/base-page';

/**
 * ProductPage
 * Builder Agent Generated
 * Source: exploration-reports/ecommerce-add-to-cart.json
 */
export class ProductPage extends BasePage {
  readonly macbookLink: Locator;
  readonly addToCartButton: Locator;
  readonly successAlert: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    super(page);
    
    // Source: Selector Inventory [2] - "Product Link (MacBook)"
    this.macbookLink = this.getByRole('link', { name: 'MacBook', exact: true }).first();
    
    // Source: Selector Inventory [3] - "Add to Cart Button"
    // Using getByRole for buttons is preferred over generic text locator
    this.addToCartButton = this.getByRole('button', { name: 'Add to Cart' }).first();
    
    // Source: Selector Inventory [4] - "Success Alert Notification"
    this.successAlert = this.page.getByText('Success: You have added');
    
    // Source: Selector Inventory [5] - "View Cart Link"
    this.viewCartLink = this.getByRole('link', { name: 'View Cart' }).first();
  }

  async clickProduct() {
    await this.macbookLink.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
  
  async goToCart() {
    await this.viewCartLink.click();
  }
}
