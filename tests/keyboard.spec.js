import {test} from "@playwright/test"

test("combo", async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    await page.locator('#name').click()
    await page.keyboard.type("Teddy Bear", {delay: 600})

    await page.locator('[id="email"]').click()
    await page.keyboard.insertText("teddy@gmail.com")

    // ?select All
    await page.keyboard.press("Control+A")
    //? copy  - ctrl+c
    await page.keyboard.press("Control+C")
    // ? Click on tab
    await page.keyboard.press("Tab")
    // ? Pate - ctrl+v
    await page.keyboard.press("Control+V")

    await page.waitForTimeout(3000)
})
