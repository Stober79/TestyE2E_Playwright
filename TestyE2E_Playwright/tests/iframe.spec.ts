import { test, expect } from "@playwright/test";

test("Sprawdzenie tekstu w iframe", async ({ page }) => {
  await page.goto("https://demoqa.com/frames");

  const frame = page.frameLocator("#frame1");
  const header = frame.locator("h1#sampleHeading");

  await expect(header).toBeVisible();
  await expect(header).toHaveText("This is a sample page");
});
