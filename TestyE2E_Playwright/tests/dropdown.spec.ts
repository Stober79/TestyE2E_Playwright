import { test, expect } from "@playwright/test";
test.afterEach(async({page})=>{
    page.close()
})
test("Wybór elementu z dropdownu", async ({ page }) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.selectOption("#oldSelectMenu", "5");
  await expect(page.locator("#oldSelectMenu")).toHaveValue("5");
});
