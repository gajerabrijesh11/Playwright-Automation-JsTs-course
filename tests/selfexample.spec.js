// This test is to understand browser and page fixtures with browser context. bewlow are the 2 examples for that.

const { test, expect } = require('@playwright/test');


test.skip('Browser context test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://eventhub.rahulshettyacademy.com/');
    await page.title()
    console.log(await page.title());
    expect(await page.title()).toBe('EventHub — Discover & Book Events');
    // await context.close();

});

/*test refer playwright atononus, {browser} refer fixture and we have to declare fixture in {}
bracket only otherwise it will work as a simple string. newContext() help us to open fresh browser
newPage() help us to open a new page in the browser */

test.skip('Page context test', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/');
    // await page.close();  Not required as it will automatically close after the test is done. 
    // if we want to close it before then we can use this line.
});

/*test refer playwright atononus, {page} refer fixture and we have to declare fixture in {}
bracket only otherwise it will work as a simple string. page is already defined in the fixture
so we can directly use it to open the page.we do not need to declare context(), newPage() */

/* if you give test.only then only that test will run and rest of the test will be ignored. 
if you give test.skip then that test will be skipped and rest of the test will run. */