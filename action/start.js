const { bot } = require("../core/bot");
const { Composer } = require("telegraf");
const { messages } = require("../lib/messages");
const { keyboards } = require("../lib/keyboards");

const composer = new Composer();

composer.start((ctx) => {
  ctx.reply(messages["start"], keyboards["start"]);
});

bot.action("help", (ctx) => {
  ctx.editMessageText(messages["help"]);
});

bot.use(composer.middleware());
