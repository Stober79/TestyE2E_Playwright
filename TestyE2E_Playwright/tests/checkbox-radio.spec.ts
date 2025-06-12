import { test, expect } from "@playwright/test";
test.afterEach(async({page})=>{
    page.close()
})
test("Zaznacz checkbox i radio", async ({ page }) => {
  await page.goto("https://demoqa.com/checkbox");
  await page.getByText("Home").click();
  await expect(page.locator(".rct-icon-check")).toBeVisible();
});
