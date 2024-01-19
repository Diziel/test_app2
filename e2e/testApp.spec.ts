import { test } from "@playwright/test";

test("test App", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByText("EUR").click();
  await page.getByText("CZK").click();
  await page.getByText("DKK").click();
  await page.getByText("SEK").click();
  await page
    .locator("div")
    .filter({ hasText: /^\+SEK$/ })
    .locator("div")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^\+CZK$/ })
    .locator("div")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^\+EUR$/ })
    .locator("div")
    .click();
  await page.getByText("CZK").click();
  await page.locator("#CZK span").click();
  await page.getByText("DKK", { exact: true }).click();
  await page.getByRole("link", { name: "With redux" }).click();
  await page.getByText("EUR").click();
  await page.locator("#PLN span").click();
  await page.locator("#GEL span").click();
  await page.getByText("+PLN").click();
  await page
    .locator("div")
    .filter({ hasText: /^\+PLN$/ })
    .locator("div")
    .click();
  await page.getByText("GEL", { exact: true }).click();
  await page.locator("#EUR span").click();
});
