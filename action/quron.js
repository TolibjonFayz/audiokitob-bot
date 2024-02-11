const { bot } = require("../core/bot");
const {
  mainKeyboard,
  arabchaquron1,
  arabchaquron2,
  arabchaquron3,
  arabchaquron4,
  arabchaquron5,
} = require("../lib/quronkeyboards");

bot.hears("Bosh menu", (ctx) => {
  ctx.reply("Tanlang 👇", mainKeyboard);
});

bot.hears("🎧 Qur`oni Karim suralari", (ctx) => {
  ctx.reply("Tanlang 👇", mainKeyboard);
});

// O'zbek tilida quron
bot.hears("🎧 O`zbekcha tarjima", async (ctx) => {
  const photo = "https://t.me/audio_toplam/35";
  const juz1 = "https://t.me/audio_toplam/36";
  const juz2 = "https://t.me/audio_toplam/38";
  const juz3 = "https://t.me/audio_toplam/40";
  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Qur'oni Karim ma'nolari tarjimasi\n🎙Qori: Hasanxon (Husaynxon) Yahyo Abdulmajid\n🎙Suxandon: Shams Solih",
  });
  await ctx.replyWithAudio(juz1, {
    caption:
      "📜 Juz': 30 (to'liq)\nManba: @audio_toplam\n00:00 - 78. Naba'\n10:21 - 79. Nazi’at\n21:13 - 80. Abasa\n29:28 - 81. Takvir\n35:06 - 82. Infitor\n39:56 - 83. Mutoffifun\n49:03 - 84. Inshiqoq\n54:51 - 85. Buruj\n01:00:39 - 86. Toriq\n01:04:29 - 87. A’laa\n01:08:29 - 88. G’oshiya\n01:13:03 - 89. Fajr\n01:20:48 - 90. Balad\n01:25:07 - 91. Shams\n01:28:25 - 92. Layl\n01:33:09 - 93. Zuho\n01:35:37 - 94. Sharh\n01:37:19 - 95. Tiyn\n01:39:43 - 96. Alaq\n01:44:00 - 97. Qadr\n01:45:29 - 98. Bayyina\n01:49:58 - 99. Zalzala\n01:52:12 - 100. Adiyat\n01:54:40 - 101. Qori’a\n01:56:56 - 102. Takasur\n01:59:01 - 103. Asr\n02:00:00 - 104. Humaza\n02:02:19 - 105. Fil\n02:03:40 - 106. Quraysh\n02:04:44 - 107. Maa’uun\n02:06:16 - 108. Kavsar\n02:07:06 - 109. Kafirun\n02:08:33 - 110. Nasr\n02:09:38 - 111. Masad\n02:10:46 - 112. Ixlos\n02:11:45 - 113. Falaq\n02:12:50 - 114. Naas",
  });
  await ctx.replyWithAudio(juz2, {
    caption:
      "📜 Juz': 29 (to'liq)\nManba: @audio_toplam\n00:00 - 67. Mulk\n13:47 - 68. Qalam\n28:49 - 69. Al-Haaqqoh\n41:23 - 70. Ma'orij\n51:49 - 71. Nuh\n01:01:54 - 72. Jin\n01:15:24 - 73. Muzzammil\n01:25:23 - 74. Muddassir\n01:38:46 - 75. Qiyomat\n01:47:05 - 76. Inson\n01:58:47 - 77. Mursalot",
  });
  await ctx.replyWithAudio(juz3, {
    caption:
      "📜 Juz': 28 (to'liq)\nManba: @audio_toplam\n00:00 - 58. Mujodala\n19:43 - 59. Hashr\n39:39 - 60. Mumtahana\n56:03 - 61. Sof\n01:04:53 - 62. Jum'a\n01:13:18 - 63. Munofiqun\n01:21:45 - 64. Tag'obun\n01:13:19 - 65. Taloq\n01:47:10 - 66. Tahrim",
  });
});

// Arab tilida quron
bot.hears("🎧 Al-Afasiy qiroati", async (ctx) => {
  const sorry = await ctx.reply("Botdagi 'xatoliklar' uchun uzr so'ramiz!");
  bot.telegram.pinChatMessage(ctx.from.id, sorry.message_id);
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

// // // // // // // // // // // // // // // // // // // // // QUR'ON
bot.hears("🎧 Al-Fatiha", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/001.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Fatiha\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Baqara", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2482";
  ctx.replyWithAudio(link, {
    caption: "Al-Baqara\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Aal-e-Imran", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2365";
  ctx.replyWithAudio(link, {
    caption: "Aal-e-Imran\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 An-Nisa", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2366";
  ctx.replyWithAudio(link, {
    caption: "An-Nisa\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Al-Maeda", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2367";
  ctx.replyWithAudio(link, {
    caption: "Al-Maeda\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Al-An`aam", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2368";
  ctx.replyWithAudio(link, {
    caption: "Al-An`aam\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Al-A`raf", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2369";
  ctx.replyWithAudio(link, {
    caption: "Al-A`raf\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Al-Anfal", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2370";
  ctx.replyWithAudio(link, {
    caption: "Al-Anfal\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 At-Tawba", (ctx) => {
  const link = "https://t.me/QURON_SURALARI_MP3_QURAN/2371";
  ctx.replyWithAudio(link, {
    caption: "At-Tawba\nManba: @QURON_SURALARI_MP3_QURAN",
  });
});

bot.hears("🎧 Yunus", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/010.mp3";
  ctx.replyWithAudio(link, {
    caption: "Yunus\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Hud", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/011.mp3";
  ctx.replyWithAudio(link, {
    caption: "Hud\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Yusuf", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/012.mp3";
  ctx.replyWithAudio(link, {
    caption: "Yusuf\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ar-Ra`d", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/013.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ar-Ra`d\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ibrahim", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/014.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ibrahim\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Hijr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/015.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Hijr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Nahl", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/016.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Nahl\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Isra", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/017.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Isra\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Kahf", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/018.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Kahf\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Maryam", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/019.mp3";
  ctx.replyWithAudio(link, {
    caption: "Maryam\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Taha", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/020.mp3";
  ctx.replyWithAudio(link, {
    caption: "Taha\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Anbiya", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/021.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Anbiya\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Hajj", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/022.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Hajj\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mumenoon", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/023.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mumenoon\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Noor", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/024.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Noor\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Furqan", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/025.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Furqan\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ash-Shuara", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/026.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ash-Shuara\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Naml", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/027.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Naml\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qasas", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/028.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qasas\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Ankaboot", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/029.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Ankaboot\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ar-Room", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/030.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ar-Room\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Luqman", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/031.mp3";
  ctx.replyWithAudio(link, {
    caption: "Luqman\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 As-Sajda", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/032.mp3";
  ctx.replyWithAudio(link, {
    caption: "As-Sajda\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Azhab", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/033.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Azhab\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Saba", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/034.mp3";
  ctx.replyWithAudio(link, {
    caption: "Saba\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Fatir", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/035.mp3";
  ctx.replyWithAudio(link, {
    caption: "Fatir\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ya-seen", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/036.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ya-seen\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 As-Saaffat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/037.mp3";
  ctx.replyWithAudio(link, {
    caption: "As-Saaffat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Sad", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/038.mp3";
  ctx.replyWithAudio(link, {
    caption: "Sad\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Az-Zumar", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/039.mp3";
  ctx.replyWithAudio(link, {
    caption: "Az-Zumar\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ghafir", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/040.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ghafir\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Fussilat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/041.mp3";
  ctx.replyWithAudio(link, {
    caption: "Fussilat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ash-Shura", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/042.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ash-Shura\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Az-Zukhruf", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/043.mp3";
  ctx.replyWithAudio(link, {
    caption: "Az-Zukhruf\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ad-Dukhan", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/044.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ad-Dukhan\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Jathiya", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/045.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Jathiya\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Ahqaf", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/046.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Ahqaf\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Muhammad", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/047.mp3";
  ctx.replyWithAudio(link, {
    caption: "Muhammad\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Fath", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/048.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Fath\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Hujraat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/049.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Hujraat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Qaf", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/050.mp3";
  ctx.replyWithAudio(link, {
    caption: "Qaf\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Adh-Dhariyat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/051.mp3";
  ctx.replyWithAudio(link, {
    caption: "Adh-Dhariyat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Tur", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/052.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Tur\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Najm", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/053.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Najm\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qamar", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/054.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qamar\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ar-Rahman", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/055.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ar-Rahman\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Waqi`a", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/056.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Waqi`a\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Hadid", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/057.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Hadid\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mujadala", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/058.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mujadala\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Hashr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/059.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Hashr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mumtahana", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/060.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mumtahana\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 As-Saff", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/061.mp3";
  ctx.replyWithAudio(link, {
    caption: "As-Saff\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Jumu`a", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/062.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Jumu`a\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Munafiqoon", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/063.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Munafiqoon\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Taghabun", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/064.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Taghabun\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Talaq", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/065.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Talaq\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Tahrim", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/066.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Tahrim\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mulk", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/067.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mulk\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qalam", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/068.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qalam\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Haaqa", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/069.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Haaqa\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Maarij", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/070.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Maarij\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Nooh", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/071.mp3";
  ctx.replyWithAudio(link, {
    caption: "Nooh\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Jinn", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/072.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Jinn\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Muzzammil", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/073.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Muzzammil\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Muddaththir", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/074.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Muddaththir\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qiyama", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/075.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qiyama\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Insan", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/076.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Insan\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mursalat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/077.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mursalat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Naba", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/078.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Naba\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Nazi`at", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/079.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Nazi`at\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Abasa", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/080.mp3";
  ctx.replyWithAudio(link, {
    caption: "Abasa\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Takwir", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/081.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Takwir\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Infitar", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/082.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Infitar\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Mutaffifin", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/083.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Mutaffifin\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Inshiqaq", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/084.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Inshiqaq\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Booroj", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/085.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Booroj\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Tariq", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/086.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Tariq\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-A`la", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/087.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-A`la\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Ghashiya", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/088.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Ghashiya\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Fajr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/089.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Fajr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Balad", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/090.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Balad\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ash-Shams", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/091.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ash-Shams\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Layl", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/092.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Layl\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Ad-Dhuha", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/093.mp3";
  ctx.replyWithAudio(link, {
    caption: "Ad-Dhuha\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 As-Sharh", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/094.mp3";
  ctx.replyWithAudio(link, {
    caption: "As-Sharh\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Tin", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/095.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Tin\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-`Alaq", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/096.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-`Alaq\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qadr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/097.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qadr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Bayyina", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/098.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Bayyina\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Zalzala", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/099.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Zalzala\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-`Adiyat", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/100.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-`Adiyat\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Qari`a", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/101.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Qari`a\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 At-Takathur", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/102.mp3";
  ctx.replyWithAudio(link, {
    caption: "At-Takathur\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Asr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/103.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Asr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Humaza", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/104.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Humaza\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Fil", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/105.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Fil\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Quraish", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/106.mp3";
  ctx.replyWithAudio(link, {
    caption: "Quraish\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Ma`un", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/107.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Ma`un\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Kauther", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/108.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Kauther\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Kafiroon", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/109.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Kafiroon\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Nasr", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/110.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Nasr\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Masadd", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/111.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Masadd\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Ikhlas", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/112.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Ikhlas\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 Al-Falaq", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/113.mp3";
  ctx.replyWithAudio(link, {
    caption: "Al-Falaq\nManba: https://islom.ziyouz.com/",
  });
});

bot.hears("🎧 An-Nas", (ctx) => {
  const link = "https://islom.ziyouz.com/quran/114.mp3";
  ctx.replyWithAudio(link, {
    caption: "An-Nas\nManba: https://islom.ziyouz.com/",
  });
});
