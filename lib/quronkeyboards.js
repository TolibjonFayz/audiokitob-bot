const { Markup } = require("telegraf");

const mainKeyboard = Markup.keyboard([
  [{ text: "🎧 O`zbekcha tarjima" }, { text: "🎧 Al-Afasiy qiroati" }],
  [{ text: "⬅ Asosiy menu" }],
]).resize();

// Arab tilida qu'ron
const arabchaquron1 = Markup.keyboard([
  [
    { text: "🎧 Al-Fatiha" },
    { text: "🎧 Al-Baqara" },
    { text: "🎧 Aal-e-Imran" },
    { text: "🎧 An-Nisa" },
  ],
  [
    { text: "🎧 Al-Maeda" },
    { text: "🎧 Al-An`aam" },
    { text: "🎧 Al-A`raf" },
    { text: "🎧 Al-Anfal" },
  ],
  [
    { text: "🎧 At-Tawba" },
    { text: "🎧 Yunus" },
    { text: "🎧 Hud" },
    { text: "🎧 Yusuf" },
  ],
  [
    { text: "🎧 Ar-Ra`d" },
    { text: "🎧 Ibrahim" },
    { text: "🎧 Al-Hijr" },
    { text: "🎧 An-Nahl" },
  ],
  [
    { text: "🎧 Al-Isra" },
    { text: "🎧 Al-Kahf" },
    { text: "🎧 Maryam" },
    { text: "🎧 Taha" },
  ],
  [
    { text: "🎧 Al-Anbiya" },
    { text: "🎧 Al-Hajj" },
    { text: "🎧 Al-Mumenoon" },
    { text: "🎧 An-Noor" },
  ],
  [{ text: "2 ➡️" }, { text: "Bosh menu" }],
]);

const arabchaquron2 = Markup.keyboard([
  [
    { text: "🎧 Al-Furqan" },
    { text: "🎧 Ash-Shuara" },
    { text: "🎧 An-Naml" },
    { text: "🎧 Al-Qasas" },
  ],
  [
    { text: "🎧 Al-Ankaboot" },
    { text: "🎧 Ar-Room" },
    { text: "🎧 Luqman" },
    { text: "🎧 As-Sajda" },
  ],
  [
    { text: "🎧 Al-Azhab" },
    { text: "🎧 Saba" },
    { text: "🎧 Fatir" },
    { text: "🎧 Ya-seen" },
  ],
  [
    { text: "🎧 As-Saaffat" },
    { text: "🎧 Sad" },
    { text: "🎧 Az-Zumar" },
    { text: "🎧 Ghafir" },
  ],
  [
    { text: "🎧 Fussilat" },
    { text: "🎧 Ash-Shura" },
    { text: "🎧 Az-Zukhruf" },
    { text: "🎧 Ad-Dukhan" },
  ],
  [
    { text: "🎧 Al-Jathiya" },
    { text: "🎧 Al-Ahqaf" },
    { text: "🎧 Muhammad" },
    { text: "🎧 Al-Fath" },
  ],
  [{ text: "1 ⬅️" }, { text: "3 ➡️" }, { text: "Bosh menu" }],
]);

const arabchaquron3 = Markup.keyboard([
  [
    { text: "🎧 Al-Hujraat" },
    { text: "🎧 Qaf" },
    { text: "🎧 Adh-Dhariyat" },
    { text: "🎧 At-Tur" },
  ],
  [
    { text: "🎧 An-Najm" },
    { text: "🎧 Al-Qamar" },
    { text: "🎧 Ar-Rahman" },
    { text: "🎧 Al-Waqi`a" },
  ],
  [
    { text: "🎧 Al-Hadid" },
    { text: "🎧 Al-Mujadala" },
    { text: "🎧 Al-Hashr" },
    { text: "🎧 Al-Mumtahana" },
  ],
  [
    { text: "🎧 As-Saff" },
    { text: "🎧 Al-Jumu`a" },
    { text: "🎧 Al-Munafiqoon" },
    { text: "🎧 At-Taghabun" },
  ],
  [
    { text: "🎧 At-Talaq" },
    { text: "🎧 At-Tahrim" },
    { text: "🎧 Al-Mulk" },
    { text: "🎧 Al-Qalam" },
  ],
  [
    { text: "🎧 Al-Haaqa" },
    { text: "🎧 Al-Maarij" },
    { text: "🎧 Nooh" },
    { text: "🎧 Al-Jinn" },
  ],
  [{ text: "2 ⬅️" }, { text: "4 ➡️" }, { text: "Bosh menu" }],
]);

const arabchaquron4 = Markup.keyboard([
  [
    { text: "🎧 Al-Muzzammil" },
    { text: "🎧 Al-Muddaththir" },
    { text: "🎧 Al-Qiyama" },
    { text: "🎧 Al-Insan" },
  ],
  [
    { text: "🎧 Al-Mursalat" },
    { text: "🎧 An-Naba" },
    { text: "🎧 An-Nazi`at" },
    { text: "🎧 Abasa" },
  ],
  [
    { text: "🎧 At-Takwir" },
    { text: "🎧 Al-Infitar" },
    { text: "🎧 Al-Mutaffifin" },
    { text: "🎧 Al-Inshiqaq" },
  ],
  [
    { text: "🎧 Al-Booroj" },
    { text: "🎧 At-Tariq" },
    { text: "🎧 Al-A`la" },
    { text: "🎧 Al-Ghashiya" },
  ],
  [
    { text: "🎧 Al-Fajr" },
    { text: "🎧 Al-Balad" },
    { text: "🎧 Ash-Shams" },
    { text: "🎧 Al-Layl" },
  ],
  [
    { text: "🎧 Ad-Dhuha" },
    { text: "🎧 As-Sharh" },
    { text: "🎧 At-Tin" },
    { text: "🎧 Al-`Alaq" },
  ],
  [{ text: "3 ⬅️" }, { text: "5 ➡️" }, { text: "Bosh menu" }],
]);

const arabchaquron5 = Markup.keyboard([
  [
    { text: "🎧 Al-Qadr" },
    { text: "🎧 Al-Bayyina" },
    { text: "🎧 Al-Zalzala" },
    { text: "🎧 Al-`Adiyat" },
  ],
  [
    { text: "🎧 Al-Qari`a" },
    { text: "🎧 At-Takathur" },
    { text: "🎧 Al-Asr" },
    { text: "🎧 Al-Humaza" },
  ],
  [
    { text: "🎧 Al-Fil" },
    { text: "🎧 Quraish" },
    { text: "🎧 Al-Ma`un" },
    { text: "🎧 Al-Kauther" },
  ],
  [
    { text: "🎧 Al-Kafiroon" },
    { text: "🎧 An-Nasr" },
    { text: "🎧 Al-Masadd" },
    { text: "🎧 Al-Ikhlas" },
  ],
  [{ text: "🎧 Al-Falaq" }, { text: "🎧 An-Nas" }],
  [{ text: "4 ⬅️" }, { text: "Bosh menu" }],
]);

module.exports = {
  mainKeyboard,
  arabchaquron1,
  arabchaquron2,
  arabchaquron3,
  arabchaquron4,
  arabchaquron5,
};
