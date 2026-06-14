import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/signin');
  await page.locator('[data-test="signup"]').click();
  await page.locator('[data-test="signup"]').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('alex');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('second');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Username' }).fill('usertest');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.locator('[data-test="signup-password"]').getByRole('textbox', { name: 'Password' }).fill('Test123!!!');
  await page.locator('[data-test="signup-password"]').getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Test123!!!');
  await page.locator('[data-test="signup-submit"]').click();
});