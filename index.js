const puppeteer = require('puppeteer');

(async function main() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://experts.shopify.com');
    } catch (e) {
        console.log('our error', e);
    }
})();
