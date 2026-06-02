import { Page, Locator } from '@playwright/test';

/**
 * BasePage is the foundation for all Page Objects.
 * It strictly enforces the global selector policy.
 */
export class BasePage {
  protected readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Helper to fetch locators using preferred strategy (data-testid).
   * Do not use XPath or CSS classes directly.
   */
  protected getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  /**
   * Helper to fetch locators by accessible role.
   */
  protected getByRole(role: Parameters<Page['getByRole']>[0], options?: Parameters<Page['getByRole']>[1]): Locator {
    return this.page.getByRole(role, options);
  }

  /**
   * Generic getLocator method strictly for pre-approved locator strings
   * returned by the Explorer Agent.
   */
  protected getLocator(selector: string): Locator {
    // Basic runtime check to discourage xpath/css
    if (selector.startsWith('//') || selector.includes('nth-child') || selector.startsWith('.')) {
      throw new Error(`Selector violation: ${selector} is strictly forbidden by Harness Engineering rules.`);
    }
    return this.page.locator(selector);
  }
}
