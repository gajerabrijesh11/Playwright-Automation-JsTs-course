/* click on register link and verify the register page open by url
validate test with existing email and password
validate test with empty email and password
validate test with invalid email and valid password
validate test with valid email and invalid password 
validate test with valid email and password
*/

const { test, expect } = require('@playwright/test');

test('Registerpage with existing email and password', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/register');
    await page.locator('input#register-email').type('testbg@gmail.com');
    await page.locator('input#register-password').type('gBRij@26');
    await page.getByRole('textbox', { name: 'Repeat your password' }).type('gBRij@26');
    await page.locator('button#register-btn').click();
    await expect(page.getByText('Email already registered')).toBeVisible();
});

test('Registerpage with empty email and password', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('input#register-password').type('gBRij@26');
    await page.getByRole('textbox', { name: 'Repeat your password' }).type('gBRij@26');
    await page.locator('button#register-btn').click();
    await expect(page.getByText('Enter a valid email')).toBeVisible();
});

test('Registerpage with invalid email and valid password', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('input#register-email').type('testbggmail.com');
    await page.locator('input#register-password').type('gBRij@26');
    await page.getByRole('textbox', { name: 'Repeat your password' }).type('gBRij@26');
    await page.locator('button#register-btn').click();
    await expect(page.getByText('Enter a valid email')).toBeVisible();

});

test('Registerpage with valid email and invalid password', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');

    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('input#register-email').type('testbg@gmail.com');
    await page.locator('input#register-password').type('gBRij@2');
    await page.locator('button#register-btn').click();
    await expect(page.getByText('Passwords do not match')).toBeVisible();

});

test('Registerpage with valid email and password', async ({ page }) => {

    const randomString = Math.random().toString(36).substring(2, 10);
    const randomEmail = `qa_user_${randomString}@gmail.com`;
    const randomStrUpper = Math.random().toString(36).substring(2, 6).toUpperCase();
    const randomNum = Math.floor(100 + Math.random() * 900);
    const randomPassword = `Secure@${randomStrUpper}${randomNum}`;

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('input#register-email').type(randomEmail);
    await page.locator('input#register-password').type(randomPassword);
    await page.getByRole('textbox', { name: 'Repeat your password' }).type(randomPassword);
    console.log('Random Email:', randomEmail);
    console.log('Random Password:', randomPassword);
    await page.locator('button#register-btn').click();

});