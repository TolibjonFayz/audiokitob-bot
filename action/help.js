const { bot } = require("../core/bot");

bot.help((ctx) => {
  let text =
    `Bizning botimizda bajarish mumkin bo'lgan komandalar:\n` +
    `/start - <code>botni ishga tushiruvchi buyruq</code> \n` +
    `Author: <a href="https://bing.com">Talibjan</a>`;
  ctx.replyWithHTML(text);
  ctx.replyWithAudio("https://t.me/audiokitoblar_islom/788", {
    caption: "Huda.uz audio",
  });
});
