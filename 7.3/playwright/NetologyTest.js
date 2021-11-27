

const user = require('../playwright/user');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

//positive test
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click('.shared-components-Header-header-module__login--JN4tR');

  await page.fill('[placeholder="Email"]', user.login);
  await page.fill('[placeholder="Пароль"]', user.pass);
  await page.click('text=Войти');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await browser.close();
})();

//negative test
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click('.shared-components-Header-header-module__login--JN4tR');
  await page.fill('[placeholder="Email"]', 'ivan34@mail.ru');
  await page.fill('[placeholder="Пароль"]', '12345');
  await page.click('text=Войти');
  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
  await browser.close();
})();