
const { PASSWORD } = require('./user.js');
const { LOGIN } = require('./user.js');
const { chromium } = require('playwright');

//positive test
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  (await page).goto("https://netology.ru");
  (await page).click('.shared-components-Header-header-module__login--JN4tR');
  (await page).fill('input[placeholder="Email"]', LOGIN);
  (await page).fill('[placeholder="Пароль"]', PASSWORD);
  (await page).click('text=Войти');
  const content = (await page).textContent('text=Мои курсы и профессии');
  expect(content).toBe('Мои курсы и профессии');
  (await browser).close();
})();

//negative test
(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  (await page).goto("https://netology.ru");
  (await page).click('.shared-components-Header-header-module__login--JN4tR');
  (await page).fill('[placeholder="Email"]', 'ivan34@mail.ru');
  (await page).fill('[placeholder="Пароль"]', '12345');
  (await page).click('text=Войти');
  const content = (await page).textContent('[class="components-ui-Form-Hint-hint-module__hint--A2dPV inputHint"]');
  expect(content).toBe('Вы ввели неправильно логин или пароль');
  (await browser).close();
})();