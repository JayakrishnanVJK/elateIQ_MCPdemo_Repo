import { test, expect } from '@playwright/test';

test.describe('Discount code minimum cart value validation', () => {
  test('negative: Rs 499 rejects SAVE10 without changing the total', async ({ page }) => {
    // 1. Start from a fresh cart page at /cart with no prior discount application.
    await page.goto('/cart');
    await expect(page.getByRole('spinbutton', { name: 'Cart value (Rs)' })).toBeVisible();

    // 2. Set the Cart value (Rs) field to 499.
    await page.getByRole('spinbutton', { name: 'Cart value (Rs)' }).fill('499');

    // 3. Enter SAVE10 in the Discount code field.
    const discountCode = page.getByRole('textbox', { name: 'Discount code' });
    await discountCode.fill('SAVE10');
    await expect(discountCode).toHaveValue('SAVE10');

    // 4. Click Apply code.
    await page.getByRole('button', { name: 'Apply code' }).click();
    await expect(page.getByRole('status')).toHaveText('Add items worth Rs 500 or more to use this code.');
    await expect(page.locator('#total')).toHaveText('Rs 499');
    await expect(page.getByRole('status')).not.toHaveText('Code applied: Rs 100 off.');
  });
});
