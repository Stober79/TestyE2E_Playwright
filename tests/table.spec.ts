import { test, expect } from "@playwright/test";

test.describe("Table", () => {
  test("Wyszukiwanie rekordu w tabeli", async ({ page }) => {
    await page.goto("https://demoqa.com/webtables");
    await page.getByPlaceholder("Search").fill("Cierra");
    await expect(page.locator(".rt-tbody")).toContainText("Cierra");
  });
});
