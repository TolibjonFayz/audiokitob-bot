const { bot } = require("../core/bot");
const {
  mainKeyboard,
  ozbekchaquron1,
  ozbekchaquron2,
  ozbekchaquron3,
  ozbekchaquron4,
  ozbekchaquron5,
  arabchaquron1,
  arabchaquron2,
  arabchaquron3,
  arabchaquron4,
  arabchaquron5,
} = require("../lib/quronkeyboards");

bot.hears("🎧 Qur`oni Karim suralari", (ctx) => {
  ctx.reply("Tanlang 👇", mainKeyboard);
});

// O'zbek tilida quron
bot.hears("🎧 O`zbekcha tarjima", (ctx) => {
  ctx.reply("Tanlang", ozbekchaquron1);
});

bot.hears("Bosh menu", (ctx) => {
  ctx.reply("Tanlang 👇", mainKeyboard);
});

bot.hears("2-varoq ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron2);
});

bot.hears("1-varoq ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron1);
});

bot.hears("3-varoq ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron3);
});

bot.hears("2-varoq ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron2);
});

bot.hears("4-varoq ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron4);
});

bot.hears("3-varoq ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron3);
});

bot.hears("5-varoq ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron5);
});

bot.hears("4-varoq ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", ozbekchaquron4);
});

// Arab tilida quron
bot.hears("🎧 Al-Afasiy qiroati", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron1);
});

bot.hears("2 ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron2);
});

bot.hears("1 ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron1);
});

bot.hears("3 ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron3);
});

bot.hears("2 ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron2);
});

bot.hears("4 ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron4);
});

bot.hears("3 ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron3);
});

bot.hears("5 ➡️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron5);
});

bot.hears("4 ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇", arabchaquron4);
});
