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
  [{ text: "🎧 Peshonamdagi nur" }, { text: "🎧 Bugun bomdod o'qidingizmi" }],
  [
    { text: "🎧 Sahro" },
    { text: "🎧 Iqror" },
    { text: "🎧 Izlash" },
    { text: "🎧 Alfido" },
  ],
  [{ text: "🎧 Jumali" }, { text: "🎧 Devona" }, { text: "🎧 Ey qizim" }],
  [{ text: "⬅ 1-varoq" }, { text: "➡ 3-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const islomiykeyboard3 = Markup.keyboard([
  [{ text: "🎧 So`nggi to`fon" }, { text: "🎧 Vido cho`qqisi" }],
  [{ text: "🎧 Ar-Rahiq Al-Maxtum" }, { text: "🎧 Riyozus solihiyn" }],
  [{ text: "🎧 Islom diniga umumiy ta’rif" }, { text: "🎧 Sahihul Buxoriy" }],
  [{ text: "⬅ 2-varoq" }, { text: "⬅ Asosiy menu" }],
]).resize();

const halqakey = Markup.keyboard([
  [{ text: "🎧 Halqa 1-10-qismlar" }],
  [{ text: "🎧 Halqa 11-20-qismlar" }],
  [{ text: "🎧 Halqa 21-32-qismlar" }],
  [{ text: "Ortga(1)" }],
]).resize();

const halolluqmakey = Markup.keyboard([
  [{ text: "🎧 Halol luqma 1-10-qismlar" }],
  [{ text: "🎧 Halol luqma 11-18-qismlar" }],
  [{ text: "Ortga(1)" }],
]).resize();

const chunkisenkey = Markup.keyboard([
  [{ text: "🎧 Chunki sen ALLOHSAN 1-10-qismlar" }],
  [{ text: "🎧 Chunki sen ALLOHSAN 11-20-qismlar" }],
  [{ text: "Ortga(1)" }],
]).resize();

const sahrokey = Markup.keyboard([
  [{ text: "🎧 Sahro 1-10-qismlar" }],
  [{ text: "🎧 Sahro 11-20-qismlar" }],
  [{ text: "🎧 Sahro 21-30-qismlar" }],
  [{ text: "Ortga(2)" }],
]).resize();

module.exports = {
  startkeyboard,
  islomiykeyboard1,
  islomiykeyboard2,
  islomiykeyboard3,
  halqakey,
  halolluqmakey,
  chunkisenkey,
  sahrokey,
};
