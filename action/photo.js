const { bot } = require("../core/bot");

bot.on("photo", (ctx) => {
  ctx.reply("Qabul qilindi");
  const user = ctx.from.id;
  const photo = ctx.message.photo[0].file_id;
  ctx.telegram.sendPhoto(user, photo);
});
