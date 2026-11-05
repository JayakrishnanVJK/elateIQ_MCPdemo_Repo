import { test, expect } from '@playwright/test';

test('BR-02: SAVE10 applies to a cart worth exactly Rs 500', async ({ page }) => {
  await page.goto('/cart');
  await page.getByLabel('Cart value (Rs)').fill('500');
  await page.getByLabel('Discount code').fill('SAVE10');
  await page.getByRole('button', { name: 'Apply code' }).click();

  await expect(page.getByRole('status')).toHaveText('Code applied: Rs 50 off.');
  await expect(page.getByRole('main')).toContainText('Rs 450');
});
