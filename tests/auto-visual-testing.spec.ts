import { test, expect } from '@playwright/test';

const endPoints = ['', 'reserve.php', 'purchase.php', 'confirmation.php'];

const urlBase = 'https://blazedemo.com/';
const urlBase2 = 'https://blazedemo.com/'; 

const country = 'BlazeDemo';


for (const endPoint of endPoints) {
    test(`Reference screenshot ${endPoint}`, async ({ page }) => {
        const targetUrl = urlBase + endPoint;
        await page.goto(targetUrl);
        console.log(targetUrl);

        await page.waitForTimeout(3000); 

        const actualScreenshot = await page.screenshot({ fullPage: true });
        expect(actualScreenshot).toMatchSnapshot(`${country}_${endPoint}.png`);
    });
}


for (const endPoint of endPoints) {
    test(`Comparing Screenshots ${endPoint}`, async ({ page }) => {
        const targetUrl = urlBase2 + endPoint;
        await page.goto(targetUrl);
        console.log(targetUrl);

        await page.waitForTimeout(3000); 

        const actualScreenshot = await page.screenshot({ fullPage: true });
        expect(actualScreenshot).toMatchSnapshot(`${country}_${endPoint}.png`);
    });
}
