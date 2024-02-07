const { bot } = require("../core/bot");
const { ozbmainKeyboard } = require("../lib/ozbekadabKeyboards");

bot.hears("🎧 O`zbek adabiyoti", (ctx) => {
  ctx.reply("Tanlang 👇", ozbmainKeyboard);
});
