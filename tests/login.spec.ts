import { test, expect } from "@playwright/test";
test.describe("Testy logowania", async () => {
  test.afterEach(async ({ page }) => {
    page.close();
  });
  test("Logowanie z poprawnymi danymi", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.fill("#username", "student");
    await page.fill("#password", "Password123");
    await page.click("#submit");

    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator("h1")).toHaveText("Logged In Successfully");
  });

  test("Logowanie z niepoprawnymi danymi", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.fill("#username", "wronguser");
    await page.fill("#password", "wrongpass");
    await page.click("#submit");

    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#error")).toHaveText("Your username is invalid!");
  });
});
