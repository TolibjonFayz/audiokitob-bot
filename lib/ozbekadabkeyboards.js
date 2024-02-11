const { Markup } = require("telegraf");

const ozbmainKeyboard = Markup.keyboard([
  [{ text: "🎧 O`tkan kunlar" }, { text: "🎧 Kecha va kunduz" }],
  [
    { text: "🎧 Daftar hoshiyasidagi bitiklar" },
    { text: "🎧 Dunyoning ishlari" },
  ],
  [{ text: "🎧 Ibratli hikoyatlar" }],
  [{ text: "⬅ Asosiy menu" }],
]).resize();

const dunyoniishlarikey = Markup.keyboard([
  [{ text: "🎧 Dunyoning ishlari 1-10-qismlar" }],
  [{ text: "🎧 Dunyoning ishlari 11-20-qismlar" }],
  [{ text: "🎧 Dunyoning ishlari 21-33-qismlar" }],
  [{ text: "Ortga(3)" }],
]);
module.exports = {
  ozbmainKeyboard,
  dunyoniishlarikey,
};
