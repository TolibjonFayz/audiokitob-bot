const { Markup } = require("telegraf");
const { bot } = require("../core/bot");

bot.command("inline", (ctx) => {
  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Bing", "inline"),
  ]);

  ctx.telegram.sendMessage(ctx.from.id, "Testing url buttons", keyboard);
});

bot.action("inline", (ctx) => {
  ctx.editMessageText("Binged");
});
