let page;

beforeEach(async () => {
  page = await browser.newPage();
},50000);
afterEach(() => {
  page.close();
},50000);

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  },50000);

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  },50000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },50000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  },50000);

  test("The h1 header content 1", async () => {
    await page.goto("https://github.com/enterprise");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Enterprise · A smarter way to work together · GitHub");
  },50000);

  test("The h1 header content 2", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Pricing · Plans for every developer · GitHub");
  },50000);

  test("The h1 header content 3", async () => {
    await page.goto("https://github.com");
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  },50000);
});
