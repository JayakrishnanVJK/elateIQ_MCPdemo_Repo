import { test, expect } from '@playwright/test';

test('BR-01: an early delivery is not labeled Late', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Order number').fill('ORD-1001');
  await page.getByRole('button', { name: 'Track' }).click();

  await expect(page.getByRole('heading', { name: 'Order ORD-1001' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Delivered on 2026-10-04');
  await expect(page.getByRole('main').locator('#late')).toBeHidden();
});
