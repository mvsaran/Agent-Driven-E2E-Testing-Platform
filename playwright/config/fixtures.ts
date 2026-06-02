import { test as base } from '@playwright/test';

/**
 * Custom test fixtures for the platform.
 * Allows Builder Agent to inject setup state.
 */
export const test = base.extend<{
  // Define custom fixture types here
  authenticatedUser: void;
}>({
  authenticatedUser: async ({ page }, use) => {
    // This is a placeholder fixture where the Builder Agent
    // could generate logic to set up auth state.
    // e.g. await page.context().addCookies([...])
    await use();
  },
});

export { expect } from '@playwright/test';
