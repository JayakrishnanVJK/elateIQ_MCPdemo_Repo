import { test, expect } from '@playwright/test';

test.describe('BR-03: discount code case sensitivity', () => {
  test('accepts lowercase save10 on a Rs 1000 cart', async ({ page }) => {
    // 1. Open the cart page to reproduce BR-03.
    await page.goto('/cart');

    // 2. Set the cart value to Rs 1000.
    await page.getByLabel('Cart value (Rs)').fill('1000');

    // 3. Enter the lowercase discount code save10.
    await page.getByLabel('Discount code').fill('save10');

    // 4. Apply the lowercase save10 discount code.
    await page.getByRole('button', { name: 'Apply code' }).click();

    await expect(page.getByRole('status')).toHaveText('Code applied: Rs 100 off.');
    await expect(page.getByRole('main')).toContainText('Rs 900');
  });
});
