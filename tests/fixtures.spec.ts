import {test, expect} from "@playwright/test";

// test with built-in fixtures
test("Sign in Button is visible", async({page}) => {
    await page.goto("https://binaryville.com/account")
    const signInButton = page.getByRole("button", {name : "Sign in"})
    await expect(signInButton).toBeVisible()
})
