import {test,expect} from "@playwright/test"

test("launch amazon app", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await expect(await page.title()).toContain("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
})