module.exports = {
  before: (browser) => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  },

  after: (browser) => {
    browser.end();
  },

  "should be on Sandbox": (browser) => {
    browser.assert.title("Sandbox");
    browser.getText("css selector", "h1", (text) => {
      browser.assert.strictEqual(text.value, "Sandbox");
    });
  },
};
