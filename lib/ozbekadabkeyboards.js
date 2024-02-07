const { Markup } = require("telegraf");

const ozbmainKeyboard = Markup.keyboard([
  [{ text: "🎧 O`tkan kunlar" }, { text: "🎧 Kecha va kunduz" }],
  [
    { text: "🎧 Daftar hoshiyasidagi bitiklar" },
    { text: "🎧 Dunyoning ishlari" },
  ],
  [{ text: "🎧 Ibratli hikoyatlar" }, { text: "🎧 Kecha va kunduz" }],
  [{ text: "⬅ Asosiy menu" }],
]).resize();

module.exports = {
  ozbmainKeyboard,
};
