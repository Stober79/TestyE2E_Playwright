import { test, expect } from "@playwright/test";
test.afterEach(async({page})=>{
    page.close()
})
test("Weryfikacja błędów walidacji formularza", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#firstName")).toHaveCSS("border-color", "rgb(220, 53, 69)");
});
