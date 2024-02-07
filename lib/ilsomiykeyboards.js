const { Markup } = require("telegraf");

// const startkeyboardInline = Markup.inlineKeyboard([
//   [
//     Markup.button.callback("Foydalanuvchilar", "button1"),
//     Markup.button.callback("Yordam", "button2"),
//   ],
//   [
//     Markup.button.callback("Admin", "admin"),
//     Markup.button.callback("Kanal", "kanal"),
//   ],
// ]);

const startkeyboard = Markup.keyboard([
  [{ text: "🎧 Islomiy audiokitoblar" }, { text: "🎧 Qur`oni Karim suralari" }],
  [{ text: "🎧 O`zbek adabiyoti" }],
]).resize();

const islomiykeyboard1 = Markup.keyboard([
  [{ text: "🎧 Halqa" }, { text: "🎧 Jangchi" }, { text: "🎧 Iskanja" }],
  [
    { text: "🎧 Halol luqma" },
    { text: "🎧 Dor ostidagi odam" },
    { text: "🎧 Chunki sen ALLOHSAN" },
  ],
  [
    { text: "🎧 Yashash fursati" },
    { text: "🎧 Qiyomat va oxirat" },
    { text: "🎧 Qalb iffati" },
  ],
  [{ text: "➡ 2-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const islomiykeyboard2 = Markup.keyboard([
  [{ text: "🎧 Peshonamdagi nur" }, { text: "🎧 Muslima ayolning vazifalari" }],
  [
    { text: "🎧 Devona" },
    { text: "🎧 Sahro" },
    { text: "🎧 Iqror" },
    { text: "🎧 Izlash" },
  ],
  [{ text: "🎧 Mahramiyat tarbiyasi" }, { text: "🎧 O'zini qidirgan odam" }],
  [{ text: "⬅ 1-varoq" }, { text: "➡ 3-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const islomiykeyboard3 = Markup.keyboard([
  [{ text: "🎧 Alfido" }, { text: "🎧 Jumali" }, { text: "🎧 Ey qizim" }],
  [{ text: "🎧 So`nggi to`fon" }, { text: "🎧 Vido cho`qqisi" }],
  [{ text: "🎧 Ar-Rahiq Al-Maxtum" }, { text: "🎧 Riyozus solihiyn" }],
  [{ text: "⬅ 2-varoq" }, { text: "➡ 4-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const islomiykeyboard4 = Markup.keyboard([
  [{ text: "🎧 Islom diniga umumiy ta’rif" }, { text: "🎧 Sahihul Buxoriy" }],
  [{ text: "🎧 Bugun bomdod o'qidingizmi" }],
  [{ text: "⬅ 3-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const halqakey = Markup.keyboard([
  [{ text: "🎧 Halqa 1-10-qismlar" }],
  [{ text: "🎧 Halqa 11-20-qismlar" }],
  [{ text: "🎧 Halqa 21-32-qismlar" }],
  [{ text: "Ortga(1)" }],
]);

const halolluqmakey = Markup.keyboard([
  [{ text: "🎧 Halol luqma 1-10-qismlar" }],
  [{ text: "🎧 Halol luqma 11-18-qismlar" }],
  [{ text: "Ortga(1)" }],
]);
module.exports = {
  startkeyboard,
  islomiykeyboard1,
  islomiykeyboard2,
  islomiykeyboard3,
  islomiykeyboard4,
  halqakey,
  halolluqmakey,
};
