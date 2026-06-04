const { test, expect } = require('@playwright/test');

test('Login page', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.title()
    console.log(await page.title());
    expect(await page.title()).toBe('EventHub — Discover & Book Events');

});

test('Login with valid credentials', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.locator('input#email').type('testbg@gmail.com');
    await page.locator('input#password').type('gBRij@26');
    await page.locator('button#login-btn').click();
    await expect(page.getByTestId('user-email-display')).toBeVisible();
    const loginToken = await page.evaluate(() => {
        return localStorage.getItem('eventhub_token'); // Ahiya tamari site ni token key nu naam lakhvu
    });
    await expect(loginToken).not.toBeNull();
    await expect(loginToken).toBeDefined();
    await expect(loginToken).toContain('eyJ');
    console.log('Sacha credentials sathe token barabar generated thayo che: ', loginToken);
});

test('login with Invalid email', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.locator('input#email').type('test@gmail.com');
    await page.locator('input#password').type('gBRij@26');
    await page.locator('button#login-btn').click();
    await expect(page.getByText('Invalid email or password')).toBeVisible();
});

test('login with Invalid password', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.locator('input#email').type('testbg@gmail.com');
    await page.locator('input#password').type('gBRij@2');
    await page.locator('button#login-btn').click();
    await expect(page.getByText('Invalid email or password')).toBeVisible();
});

test('login with empty email and password', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.locator('button#login-btn').click();
    await expect(page.getByText('Enter a valid email')).toBeVisible();
    await page.getByText('Password must be at least 6').click();
});