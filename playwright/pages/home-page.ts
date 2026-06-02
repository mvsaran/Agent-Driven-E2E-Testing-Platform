import { Locator, Page } from '@playwright/test';
import { BasePage } from '../utils/base-page';

/**
 * HomePage
 * Builder Agent Generated
 * Source: exploration-reports/ecommerce-add-to-cart.json
 */
export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    
    // Traceability: Using placeholders and roles as identified by Explorer
    // Source: Selector Inventory [0] - "Search Input Field"
    this.searchInput = this.page.getByPlaceholder('Search For Products').first();
    
    // Source: Selector Inventory [1] - "Search Submit Button"
    this.searchButton = this.getByRole('button', { name: 'Search' });
  }

  async navigate() {
    // Source: URLs [0]
    await this.page.goto('https://ecommerce-playground.lambdatest.io/');
  }

  async searchForProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
