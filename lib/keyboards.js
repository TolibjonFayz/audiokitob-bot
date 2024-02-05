const { Markup } = require("telegraf");

const keyboards = {
  start: Markup.inlineKeyboard([
    Markup.button.callback("Komandalarni ko'rsatish", "help"),
  ]),
  help: Markup.inlineKeyboard([Markup.button.callback("Hehe")]),
};

module.exports = {
  keyboards,
};
