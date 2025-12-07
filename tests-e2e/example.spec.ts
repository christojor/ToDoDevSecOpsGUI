import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite \+ React/);
});

test('counter button works', async ({ page }) => {
  await page.goto('/');

  // Click the counter button
  const button = page.getByRole('button', { name: /count is/i });
  await expect(button).toBeVisible();
  
  await button.click();
  await expect(button).toHaveText('count is 1');
  
  await button.click();
  await expect(button).toHaveText('count is 2');
});

