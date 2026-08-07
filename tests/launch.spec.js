import {test,expect} from "@playwright/test"

test("launch amazon app", async({page})=>{
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
    await expect(await page.title()).toContain("Google")
})