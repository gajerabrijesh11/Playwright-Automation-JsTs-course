const { test, expect } = require('@playwright/test');

test('fake event search', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.locator('input#email').type('testbg@gmail.com');
    await page.locator('input#password').type('gBRij@26');
    await page.locator('button#login-btn').click();
    await page.getByTestId('nav-events').click();
    await page.getByRole('textbox', { name: 'Search events, venues…' }).fill('sgdhdj');
    await expect(page.getByRole('heading', { name: 'No events found' })).toBeVisible();
});