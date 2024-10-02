import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import {expect} from "@playwright/test"

setDefaultTimeout(1000*60*2)

let browser: Browser
let bCtx: BrowserContext 
let page: Page 

Before(async function () {
    try {
        browser = await chromium.launch({
            headless: false, 
            channel: 'chrome', 
            args: ['--start-maximized'] 
        });
        bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
        page = await bCtx.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    } catch (error) {
        console.error("Error al iniciar el navegador:", error);
    }
});


After(async function () {
    await page.close();
    await bCtx.close();
    await browser.close();
})

export function getPage():Page{
    return page;
}