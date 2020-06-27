const { Selector } = require("testcafe");

fixture`Sandbox`.page`https://www.google.com/`;

test("should be on Sandbox", async (t) => {
  await t
    .expect(Selector("title").innerText)
    .eql("Google");
});
