import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/base-page';

/**
 * CartPage
 * Builder Agent Generated
 * Source: exploration-reports/ecommerce-add-to-cart.json
 */
export class CartPage extends BasePage {
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    
    // Source: Selector Inventory [6] - "Checkout Button"
    this.checkoutButton = this.getByRole('link', { name: 'Checkout' });
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
