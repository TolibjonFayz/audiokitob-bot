const { bot } = require("../core/bot");
const {
  islomiykeyboard1,
  startkeyboard,
  islomiykeyboard2,
  islomiykeyboard3,
  halqakey,
  halolluqmakey,
  chunkisenkey,
  sahrokey,
} = require("../lib/ilsomiykeyboards");

bot.hears("🎧 Islomiy audiokitoblar", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard1);
});

bot.hears("⬅ Asosiy menu", (ctx) => {
  ctx.reply("Tanlang 👇", startkeyboard);
});

bot.hears("➡ 2-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard2);
});

bot.hears("⬅ 1-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard1);
});

bot.hears("➡ 3-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard3);
});

bot.hears("⬅ 2-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard2);
});

// // // // // // // // // // // // // // // // // // // HALQA
bot.hears("🎧 Halqa", (ctx) => {
  ctx.reply("Tanlang 👇", halqakey);
});

bot.hears("Ortga(1)", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard1);
});

bot.hears("🎧 Halqa 1-10-qismlar", async (ctx) => {
  const halqaphoto = "https://t.me/audiokitoblar_islom/332";
  const halqa1_id = "https://t.me/audiokitoblar_islom/222";
  const halqa2_id = "https://t.me/audiokitoblar_islom/224";
  const halqa3_id = "https://t.me/audiokitoblar_islom/227";
  const halqa4_id = "https://t.me/audiokitoblar_islom/229";
  const halqa5_id = "https://t.me/audiokitoblar_islom/231";
  const halqa6_id = "https://t.me/audiokitoblar_islom/235";
  const halqa7_id = "https://t.me/audiokitoblar_islom/237";
  const halqa8_id = "https://t.me/audiokitoblar_islom/240";
  const halqa9_id = "https://t.me/audiokitoblar_islom/242";
  const halqa10_id = "https://t.me/audiokitoblar_islom/245";
  await ctx.replyWithPhoto(halqaphoto, {
    caption:
      "🎧 Halqa audiokitobi\n✍🏻 Akrom Malik\n🎙 Shams Solih\n🎙 Muhammad Nur\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa1_id, {
    caption: "🎧Halqa 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa2_id, {
    caption: "🎧Halqa 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa3_id, {
    caption: "🎧Halqa 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa4_id, {
    caption: "🎧Halqa 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa5_id, {
    caption: "🎧Halqa 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa6_id, {
    caption: "🎧Halqa 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa7_id, {
    caption: "🎧Halqa 7-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa8_id, {
    caption: "🎧Halqa 8-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa9_id, {
    caption: "🎧Halqa 9-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa10_id, {
    caption: "🎧Halqa 10-qism\nManba: @shams_solih",
  });
});

bot.hears("🎧 Halqa 11-20-qismlar", async (ctx) => {
  const halqa11_id = "https://t.me/audiokitoblar_islom/246";
  const halqa12_id = "https://t.me/audiokitoblar_islom/248";
  const halqa13_id = "https://t.me/audiokitoblar_islom/250";
  const halqa14_id = "https://t.me/audiokitoblar_islom/253";
  const halqa15_id = "https://t.me/audiokitoblar_islom/255";
  const halqa16_id = "https://t.me/audiokitoblar_islom/256";
  const halqa17_id = "https://t.me/audiokitoblar_islom/258";
  const halqa18_id = "https://t.me/audiokitoblar_islom/260";
  const halqa19_id = "https://t.me/audiokitoblar_islom/265";
  const halqa20_id = "https://t.me/audiokitoblar_islom/267";

  await ctx.replyWithAudio(halqa11_id, {
    caption: "🎧Halqa 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa12_id, {
    caption: "🎧Halqa 12-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa13_id, {
    caption: "🎧Halqa 13-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa14_id, {
    caption: "🎧Halqa 14-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa15_id, {
    caption: "🎧Halqa 15-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa16_id, {
    caption: "🎧Halqa 16-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa17_id, {
    caption: "🎧Halqa 17-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa18_id, {
    caption: "🎧Halqa 18-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa19_id, {
    caption: "🎧Halqa 19-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa20_id, {
    caption: "🎧Halqa 20-qism\nManba: @shams_solih",
  });
});

bot.hears("🎧 Halqa 21-32-qismlar", async (ctx) => {
  const halqa21 = "https://t.me/audiokitoblar_islom/268";
  const halqa22 = "https://t.me/audiokitoblar_islom/269";
  const halqa23 = "https://t.me/audiokitoblar_islom/270";
  const halqa24 = "https://t.me/audiokitoblar_islom/271";
  const halqa25 = "https://t.me/audiokitoblar_islom/273";
  const halqa26 = "https://t.me/audiokitoblar_islom/274";
  const halqa27 = "https://t.me/audiokitoblar_islom/275";
  const halqa28 = "https://t.me/audiokitoblar_islom/276";
  const halqa29 = "https://t.me/audiokitoblar_islom/277";
  const halqa30 = "https://t.me/audiokitoblar_islom/278";
  const halqa31 = "https://t.me/audiokitoblar_islom/279";
  const halqa32 = "https://t.me/audiokitoblar_islom/280";

  await ctx.replyWithAudio(halqa21, {
    caption: "🎧Halqa 21-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa22, {
    caption: "🎧Halqa 22-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa23, {
    caption: "🎧Halqa 23-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa24, {
    caption: "🎧Halqa 24-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa25, {
    caption: "🎧Halqa 25-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa26, {
    caption: "🎧Halqa 26-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa27, {
    caption: "🎧Halqa 27-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa28, {
    caption: "🎧Halqa 28-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa29, {
    caption: "🎧Halqa 29-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa30, {
    caption: "🎧Halqa 30-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa31, {
    caption: "🎧Halqa 31-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halqa32, {
    caption: "🎧Halqa 32-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // JANGCHi
bot.hears("🎧 Jangchi", async (ctx) => {
  const jangchi_photo = "https://t.me/audiokitoblar_islom/331";
  const jangchi_id123 = "https://t.me/audiokitoblar_islom/187";
  const jangchi_id456 = "https://t.me/audiokitoblar_islom/189";
  const jangchi_id789 = "https://t.me/audiokitoblar_islom/194";
  const jangchi_id1011 = "https://t.me/audiokitoblar_islom/197";
  const jangchi_id12 = "https://t.me/audiokitoblar_islom/203";
  const jangchi_id13 = "https://t.me/audiokitoblar_islom/205";
  const jangchi_id14 = "https://t.me/audiokitoblar_islom/208";

  await ctx.replyWithPhoto(jangchi_photo, {
    caption:
      "🎧 Jangchi audiokitobi\n✍🏻 Akrom Malik\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id123, {
    caption: "🎧Jangchi 1-2-3-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id456, {
    caption: "🎧Jangchi 4-5-6-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id789, {
    caption: "🎧Jangchi 7-8-9-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id1011, {
    caption: "🎧Jangchi 10-11-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id12, {
    caption: "🎧Jangchi 12-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id13, {
    caption: "🎧Jangchi 13-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(jangchi_id14, {
    caption: "🎧Jangchi 14-qismlar\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // ISKANJA
bot.hears("🎧 Iskanja", async (ctx) => {
  const photo = "https://t.me/audio_toplam/15";
  const iskanja_id1 = "https://t.me/audiokitoblar_islom/337";
  const iskanja_id2 = "https://t.me/audiokitoblar_islom/338";
  const iskanja_id3 = "https://t.me/audiokitoblar_islom/339";
  const iskanja_id4 = "https://t.me/audiokitoblar_islom/343";
  const iskanja_id5 = "https://t.me/audiokitoblar_islom/346";
  const iskanja_id6 = "https://t.me/audiokitoblar_islom/347";
  const iskanja_id7 = "https://t.me/audiokitoblar_islom/348";
  const iskanja_id8 = "https://t.me/audiokitoblar_islom/350";
  const iskanja_id9 = "https://t.me/audiokitoblar_islom/354";
  const iskanja_id10 = "https://t.me/audiokitoblar_islom/356";
  const iskanja_id11 = "https://t.me/audiokitoblar_islom/358";
  const iskanja_id12 = "https://t.me/audiokitoblar_islom/360";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Iskanja audiokitobi\n✍🏻 Omina Shenliko`g`li\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id1, {
    caption: "🎧Iskanja 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id2, {
    caption: "🎧Iskanja 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id3, {
    caption: "🎧Iskanja 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id4, {
    caption: "🎧Iskanja 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id5, {
    caption: "🎧Iskanja 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id6, {
    caption: "🎧Iskanja 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id7, {
    caption: "🎧Iskanja 7-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id8, {
    caption: "🎧Iskanja 8-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id9, {
    caption: "🎧Iskanja 9-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id10, {
    caption: "🎧Iskanja 10-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id11, {
    caption: "🎧Iskanja 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(iskanja_id12, {
    caption: "🎧Iskanja 12-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // HALOL LUQMA
bot.hears("🎧 Halol luqma", (ctx) => {
  ctx.reply("Tanlang 👇", halolluqmakey);
});

bot.hears("🎧 Halol luqma 1-10-qismlar", async (ctx) => {
  const halol_luqma_photo = "https://t.me/audio_toplam/3";
  const halol_luqma_id1 = "https://t.me/audiokitoblar_islom/49";
  const halol_luqma_id2 = "https://t.me/audiokitoblar_islom/50";
  const halol_luqma_id3 = "https://t.me/audiokitoblar_islom/51";
  const halol_luqma_id4 = "https://t.me/audiokitoblar_islom/52";
  const halol_luqma_id5 = "https://t.me/audiokitoblar_islom/53";
  const halol_luqma_id6 = "https://t.me/audiokitoblar_islom/54";
  const halol_luqma_id7 = "https://t.me/audiokitoblar_islom/55";
  const halol_luqma_id8 = "https://t.me/audiokitoblar_islom/56";
  const halol_luqma_id9 = "https://t.me/audiokitoblar_islom/57";
  const halol_luqma_id10 = "https://t.me/audiokitoblar_islom/58";

  await ctx.replyWithPhoto(halol_luqma_photo, {
    caption:
      "🎧 Halol luqma audiokitobi\n✍🏻 Rauf Jilasun\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id1, {
    caption: "🎧Halol luqma 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id2, {
    caption: "🎧Halol luqma 2-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id3, {
    caption: "🎧Halol luqma 3-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id4, {
    caption: "🎧Halol luqma 4-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id5, {
    caption: "🎧Halol luqma 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id6, {
    caption: "🎧Halol luqma 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id7, {
    caption: "🎧Halol luqma 7-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id8, {
    caption: "🎧Halol luqma 8-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id9, {
    caption: "🎧Halol luqma 9-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id10, {
    caption: "🎧Halol luqma 10-qismlar\nManba: @shams_solih",
  });
});

bot.hears("🎧 Halol luqma 11-18-qismlar", async (ctx) => {
  const halol_luqma_id11 = "https://t.me/audiokitoblar_islom/59";
  const halol_luqma_id12 = "https://t.me/audiokitoblar_islom/60";
  const halol_luqma_id13 = "https://t.me/audiokitoblar_islom/61";
  const halol_luqma_id14 = "https://t.me/audiokitoblar_islom/62";
  const halol_luqma_id15 = "https://t.me/audiokitoblar_islom/63";
  const halol_luqma_id16 = "https://t.me/audiokitoblar_islom/64";
  const halol_luqma_id17 = "https://t.me/audiokitoblar_islom/65";
  const halol_luqma_id18 = "https://t.me/audiokitoblar_islom/69";

  await ctx.replyWithAudio(halol_luqma_id11, {
    caption: "🎧Halol luqma 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id12, {
    caption: "🎧Halol luqma 12-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id13, {
    caption: "🎧Halol luqma 13-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id14, {
    caption: "🎧Halol luqma 14-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id15, {
    caption: "🎧Halol luqma 15-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id16, {
    caption: "🎧Halol luqma 16-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id17, {
    caption: "🎧Halol luqma 17-qismlar\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(halol_luqma_id18, {
    caption: "🎧Halol luqma 18-qismlar\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // DOR OSTIDAGI ODAM
bot.hears("🎧 Dor ostidagi odam", async (ctx) => {
  const doroo_photo = "https://t.me/audiokitoblar_islom/70";
  const doroo_id1 = "https://t.me/audiokitoblar_islom/86";
  const doroo_id2 = "https://t.me/audiokitoblar_islom/87";
  const doroo_id3 = "https://t.me/audiokitoblar_islom/88";
  const doroo_id4 = "https://t.me/audiokitoblar_islom/89";
  const doroo_id5 = "https://t.me/audiokitoblar_islom/90";
  const doroo_id6 = "https://t.me/audiokitoblar_islom/91";

  await ctx.replyWithPhoto(doroo_photo, {
    caption:
      "🎧 Dor ostidagi odam audiokitobi\n✍🏻 Amina Shenliko`g`li\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id1, {
    caption: "🎧Dor ostidagi odam 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id2, {
    caption: "🎧Dor ostidagi odam 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id3, {
    caption: "🎧Dor ostidagi odam 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id4, {
    caption: "🎧Dor ostidagi odam 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id5, {
    caption: "🎧Dor ostidagi odam 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(doroo_id6, {
    caption: "🎧Dor ostidagi odam 6-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // CHUNKI SEN ALLOHSAN
bot.hears("🎧 Chunki sen ALLOHSAN", (ctx) => {
  ctx.reply("Tanlang 👇", chunkisenkey);
});

bot.hears("🎧 Chunki sen ALLOHSAN 1-10-qismlar", async (ctx) => {
  const chunsA_photo = "https://t.me/audiokitoblar_islom/308";
  const chunsA_id1 = "https://t.me/audiokitoblar_islom/285";
  const chunsA_id2 = "https://t.me/audiokitoblar_islom/287";
  const chunsA_id3 = "https://t.me/audiokitoblar_islom/288";
  const chunsA_id4 = "https://t.me/audiokitoblar_islom/289";
  const chunsA_id5 = "https://t.me/audiokitoblar_islom/290";
  const chunsA_id6 = "https://t.me/audiokitoblar_islom/291";
  const chunsA_id7 = "https://t.me/audiokitoblar_islom/292";
  const chunsA_id8 = "https://t.me/audiokitoblar_islom/293";
  const chunsA_id9 = "https://t.me/audiokitoblar_islom/294";
  const chunsA_id10 = "https://t.me/audiokitoblar_islom/295";

  await ctx.replyWithPhoto(chunsA_photo, {
    caption:
      "🎧 Chunki sen ALLOHSAN audiokitobi\n✍🏻 Ali Jobir Fiyfiy\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id1, {
    caption: "🎧Chunki sen ALLOHSAN 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id2, {
    caption: "🎧Chunki sen ALLOHSAN 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id3, {
    caption: "🎧Chunki sen ALLOHSAN 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id4, {
    caption: "🎧Chunki sen ALLOHSAN 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id5, {
    caption: "🎧Chunki sen ALLOHSAN 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id6, {
    caption: "🎧Chunki sen ALLOHSAN 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id7, {
    caption: "🎧Chunki sen ALLOHSAN 7-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id8, {
    caption: "🎧Chunki sen ALLOHSAN 8-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id9, {
    caption: "🎧Chunki sen ALLOHSAN 9-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id10, {
    caption: "🎧Chunki sen ALLOHSAN 10-qism\nManba: @shams_solih",
  });
});

bot.hears("🎧 Chunki sen ALLOHSAN 11-20-qismlar", async (ctx) => {
  const chunsA_id11 = "https://t.me/audiokitoblar_islom/296";
  const chunsA_id12 = "https://t.me/audiokitoblar_islom/297";
  const chunsA_id13 = "https://t.me/audiokitoblar_islom/298";
  const chunsA_id14 = "https://t.me/audiokitoblar_islom/300";
  const chunsA_id15 = "https://t.me/audiokitoblar_islom/301";
  const chunsA_id16 = "https://t.me/audiokitoblar_islom/302";
  const chunsA_id17 = "https://t.me/audiokitoblar_islom/303";
  const chunsA_id18 = "https://t.me/audiokitoblar_islom/304";
  const chunsA_id19 = "https://t.me/audiokitoblar_islom/305";
  const chunsA_id20 = "https://t.me/audiokitoblar_islom/307";

  await ctx.replyWithAudio(chunsA_id11, {
    caption: "🎧Chunki sen ALLOHSAN 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id12, {
    caption: "🎧Chunki sen ALLOHSAN 12-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id13, {
    caption: "🎧Chunki sen ALLOHSAN 13-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id14, {
    caption: "🎧Chunki sen ALLOHSAN 14-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id15, {
    caption: "🎧Chunki sen ALLOHSAN 15-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id16, {
    caption: "🎧Chunki sen ALLOHSAN 16-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id17, {
    caption: "🎧Chunki sen ALLOHSAN 17-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id18, {
    caption: "🎧Chunki sen ALLOHSAN 18-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id19, {
    caption: "🎧Chunki sen ALLOHSAN 19-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(chunsA_id20, {
    caption: "🎧Chunki sen ALLOHSAN 20-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // YASHASH FURSATI
bot.hears("🎧 Yashash fursati", async (ctx) => {
  const yashash_photo = "https://t.me/audio_toplam/13";
  const yashash_id1 = "https://t.me/audiokitoblar_islom/427";
  const yashash_id2 = "https://t.me/audiokitoblar_islom/428";
  const yashash_id3 = "https://t.me/audiokitoblar_islom/431";
  const yashash_id4 = "https://t.me/audiokitoblar_islom/432";
  const yashash_id5 = "https://t.me/audiokitoblar_islom/433";
  const yashash_id6 = "https://t.me/audiokitoblar_islom/434";

  await ctx.replyWithPhoto(yashash_photo, {
    caption:
      "🎧 Yashash fursati\n✍🏻 Mehmet Olaqosh\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id1, {
    caption: "🎧 Yashash fursati 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id2, {
    caption: "🎧 Yashash fursati 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id3, {
    caption: "🎧 Yashash fursati 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id4, {
    caption: "🎧 Yashash fursati 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id5, {
    caption: "🎧 Yashash fursati 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(yashash_id6, {
    caption: "🎧 Yashash fursati 6-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // QIYOMAT VA OXIRAT
bot.hears("🎧 Qiyomat va oxirat", async (ctx) => {
  const qiyomat_photo = "https://t.me/audiokitoblar_islom/327";
  const qiyomat_id1 = "https://t.me/audiokitoblar_islom/309";
  const qiyomat_id2 = "https://t.me/audiokitoblar_islom/310";
  const qiyomat_id3 = "https://t.me/audiokitoblar_islom/311";
  const qiyomat_id4 = "https://t.me/audiokitoblar_islom/313";
  const qiyomat_id5 = "https://t.me/audiokitoblar_islom/314";
  const qiyomat_id6 = "https://t.me/audiokitoblar_islom/315";
  const qiyomat_id7 = "https://t.me/audiokitoblar_islom/316";
  const qiyomat_id8 = "https://t.me/audiokitoblar_islom/317";
  const qiyomat_id9 = "https://t.me/audiokitoblar_islom/318";
  const qiyomat_id10 = "https://t.me/audiokitoblar_islom/320";
  const qiyomat_id11 = "https://t.me/audiokitoblar_islom/321";
  const qiyomat_id12 = "https://t.me/audiokitoblar_islom/324";
  const qiyomat_id13 = "https://t.me/audiokitoblar_islom/325";
  const qiyomat_id14 = "https://t.me/audiokitoblar_islom/326";

  await ctx.replyWithPhoto(qiyomat_photo, {
    caption:
      "🎧 Qiyomat va oxirat\n✍🏻 Imom Abu Homid G`azzoliy\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id1, {
    caption: "🎧 Qiyomat va oxirat 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id2, {
    caption: "🎧 Qiyomat va oxirat 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id3, {
    caption: "🎧 Qiyomat va oxirat 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id4, {
    caption: "🎧 Qiyomat va oxirat 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id5, {
    caption: "🎧 Qiyomat va oxirat 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id6, {
    caption: "🎧 Qiyomat va oxirat 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id7, {
    caption: "🎧 Qiyomat va oxirat 7-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id8, {
    caption: "🎧 Qiyomat va oxirat 8-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id9, {
    caption: "🎧 Qiyomat va oxirat 9-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id10, {
    caption: "🎧 Qiyomat va oxirat 10-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id11, {
    caption: "🎧 Qiyomat va oxirat 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id12, {
    caption: "🎧 Qiyomat va oxirat 12-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id13, {
    caption: "🎧 Qiyomat va oxirat 13-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(qiyomat_id14, {
    caption: "🎧 Qiyomat va oxirat 14-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // // QALB IFFATI
bot.hears("🎧 Qalb iffati", async (ctx) => {
  const photo =
    "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/febc55159870795.63a80c7edf6ad.jpg";
  const link1 = "https://t.me/abdukarim_mirzayev_kanali/4413";
  const link2 = "https://t.me/abdukarim_mirzayev_kanali/4492";
  const link3 = "https://t.me/abdukarim_mirzayev_kanali/4622";
  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Qalb iffati\n✍🏻 Nuriya Chelen\n🎙 Abdukarim Mirzayev\nManba: @Abdukarim_Mirzayev_kanali",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Qalb iffati 1-qism\nManba: @Abdukarim_Mirzayev_kanali",
  });
  await ctx.replyWithAudio(link2, {
    caption: "🎧 Qalb iffati 2-qism\nManba: @Abdukarim_Mirzayev_kanali",
  });
  await ctx.replyWithAudio(link3, {
    caption: "🎧 Qalb iffati 3-qism\nManba: @Abdukarim_Mirzayev_kanali",
  });
  await ctx.reply(
    "Qalb iffati kitobining to'liq ko'rinish\nhttps://youtu.be/2LnciIl6SmM?si=V8nkKgHqgW6QvAsg"
  );
});

// // // // // // // // // // // // // // // // // // PESHONAMDAGI NUR
bot.hears("🎧 Peshonamdagi nur", async (ctx) => {
  const peshnur_photo = "https://t.me/audio_toplam/5";
  const peshnur_id1 = "https://t.me/audiokitoblar_islom/93";
  const peshnur_id2 = "https://t.me/audiokitoblar_islom/94";
  const peshnur_id3 = "https://t.me/audiokitoblar_islom/95";
  const peshnur_id4 = "https://t.me/audiokitoblar_islom/96";
  const peshnur_id5 = "https://t.me/audiokitoblar_islom/97";
  const peshnur_id6 = "https://t.me/audiokitoblar_islom/98";

  await ctx.replyWithPhoto(peshnur_photo, {
    caption:
      "🎧 Peshonamdagi nur\n✍🏻 Mahmud Olaqosh\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id1, {
    caption: "🎧 Peshonamdagi nur 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id2, {
    caption: "🎧 Peshonamdagi nur 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id3, {
    caption: "🎧 Peshonamdagi nur 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id4, {
    caption: "🎧 Peshonamdagi nur 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id5, {
    caption: "🎧 Peshonamdagi nur 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id6, {
    caption: "🎧 Peshonamdagi nur 6-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // PESHONAMDAGI NUR
bot.hears("🎧 Peshonamdagi nur", async (ctx) => {
  const peshnur_photo = "https://t.me/audio_toplam/5";
  const peshnur_id1 = "https://t.me/audiokitoblar_islom/93";
  const peshnur_id2 = "https://t.me/audiokitoblar_islom/94";
  const peshnur_id3 = "https://t.me/audiokitoblar_islom/95";
  const peshnur_id4 = "https://t.me/audiokitoblar_islom/96";
  const peshnur_id5 = "https://t.me/audiokitoblar_islom/97";
  const peshnur_id6 = "https://t.me/audiokitoblar_islom/98";

  await ctx.replyWithPhoto(peshnur_photo, {
    caption:
      "🎧 Peshonamdagi nur\n✍🏻 Mahmud Olaqosh\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id1, {
    caption: "🎧 Peshonamdagi nur 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id2, {
    caption: "🎧 Peshonamdagi nur 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id3, {
    caption: "🎧 Peshonamdagi nur 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id4, {
    caption: "🎧 Peshonamdagi nur 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id5, {
    caption: "🎧 Peshonamdagi nur 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(peshnur_id6, {
    caption: "🎧 Peshonamdagi nur 6-qism\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // // // DEVONA
bot.hears("🎧 Devona", async (ctx) => {
  const photo = "https://t.me/audio_toplam/17";
  const link1 = "https://t.me/audiokitoblar_islom/441";
  const link2 = "https://t.me/audiokitoblar_islom/445";
  const link3 = "https://t.me/audiokitoblar_islom/448";
  const link4 = "https://t.me/audiokitoblar_islom/452";
  const link5 = "https://t.me/audiokitoblar_islom/454";
  const link6 = "https://t.me/audiokitoblar_islom/456";
  const link7 = "https://t.me/audiokitoblar_islom/458";
  const link8 = "https://t.me/audiokitoblar_islom/460";
  const link9 = "https://t.me/audiokitoblar_islom/462";
  const link10 = "https://t.me/audiokitoblar_islom/465";
  const link11 = "https://t.me/audiokitoblar_islom/469";
  const link12 = "https://t.me/audiokitoblar_islom/470";
  const link13 = "https://t.me/audiokitoblar_islom/472";
  const link14 = "https://t.me/audiokitoblar_islom/476";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧 Devona\n✍🏻 Mehmet Olaqosh\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Devona 1-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link2, {
    caption: "🎧 Devona 2-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link3, {
    caption: "🎧 Devona 3-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link4, {
    caption: "🎧 Devona 4-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link5, {
    caption: "🎧 Devona 5-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link6, {
    caption: "🎧 Devona 6-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link7, {
    caption: "🎧 Devona 7-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link8, {
    caption: "🎧 Devona 8-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link9, {
    caption: "🎧 Devona 9-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link10, {
    caption: "🎧 Devona 10-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link11, {
    caption: "🎧 Devona 11-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link12, {
    caption: "🎧 Devona 12-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link13, {
    caption: "🎧 Devona 13-qism\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link14, {
    caption: "🎧 Devona 14-qism\nManba: @shams_solih",
  });
});

bot.hears("Ortga(2)", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard2);
});
// // // // // // // // // // // // // // // // // // // // // SAHRO
bot.hears("🎧 Sahro", (ctx) => {
  ctx.reply("Tanlang 👇", sahrokey);
});

bot.hears("🎧 Sahro 1-10-qismlar", async (ctx) => {
  const sahro_photo = "https://t.me/abdukarim_mirzayev_kanali/2933";
  const sahro_id1 = "https://t.me/abdukarim_mirzayev_kanali/2947";
  const sahro_id2 = "https://t.me/abdukarim_mirzayev_kanali/2982";
  const sahro_id3 = "https://t.me/abdukarim_mirzayev_kanali/3019";
  const sahro_id4 = "https://t.me/abdukarim_mirzayev_kanali/3042";
  const sahro_id5 = "https://t.me/abdukarim_mirzayev_kanali/3079";
  const sahro_id6 = "https://t.me/abdukarim_mirzayev_kanali/3116";
  const sahro_id7 = "https://t.me/abdukarim_mirzayev_kanali/3160";
  const sahro_id8 = "https://youtu.be/rslgISsHUlw?si=oGEvBlTsWoDIuz2W";
  const sahro_id9 = "https://t.me/abdukarim_mirzayev_kanali/3242";
  const sahro_id10 = "https://t.me/abdukarim_mirzayev_kanali/3266";

  await ctx.replyWithPhoto(sahro_photo, {
    caption:
      "🎧 Sahro\n✍🏻 Mustafo Yusuf\n🎙 Abdukarim Mirzayev\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id1, {
    caption: "🎧 Sahro 1-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id2, {
    caption: "🎧 Sahro 2-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id3, {
    caption: "🎧 Sahro 3-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id4, {
    caption: "🎧 Sahro 4-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id5, {
    caption: "🎧 Sahro 5-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id6, {
    caption: "🎧 Sahro 6-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id7, {
    caption: "🎧 Sahro 7-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.reply(
    `${sahro_id8}\n🎧 Sahro 8-bob\nManba: @abdukarim_mirzayev_kanali`
  );
  await ctx.replyWithAudio(sahro_id9, {
    caption: "🎧 Sahro 9-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id10, {
    caption: "🎧 Sahro 10-bob\nManba: @abdukarim_mirzayev_kanali",
  });
});

bot.hears("🎧 Sahro 11-20-qismlar", async (ctx) => {
  const sahro_id11 = "https://t.me/abdukarim_mirzayev_kanali/3311";
  const sahro_id12 = "https://t.me/abdukarim_mirzayev_kanali/3341";
  const sahro_id13 = "https://t.me/abdukarim_mirzayev_kanali/3369";
  const sahro_id14 = "https://t.me/abdukarim_mirzayev_kanali/3440";
  const sahro_id15 = "https://t.me/abdukarim_mirzayev_kanali/3449";
  const sahro_id16 = "https://t.me/abdukarim_mirzayev_kanali/3486";
  const sahro_id17 = "https://t.me/abdukarim_mirzayev_kanali/3543";
  const sahro_id18 = "https://youtu.be/MB80_O39Bz4?si=v6qdz7FFzAcmEqTm";
  const sahro_id19 = "https://t.me/abdukarim_mirzayev_kanali/3612";
  const sahro_id20 = "https://t.me/abdukarim_mirzayev_kanali/3674";

  await ctx.replyWithAudio(sahro_id11, {
    caption: "🎧 Sahro 11-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id12, {
    caption: "🎧 Sahro 12-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id13, {
    caption: "🎧 Sahro 13-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id14, {
    caption: "🎧 Sahro 14-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id15, {
    caption: "🎧 Sahro 15-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id16, {
    caption: "🎧 Sahro 16-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id17, {
    caption: "🎧 Sahro 17-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.reply(
    `${sahro_id18}\n🎧 Sahro 18-bob\nManba: @abdukarim_mirzayev_kanali`
  );
  await ctx.replyWithAudio(sahro_id19, {
    caption: "🎧 Sahro 19-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id20, {
    caption: "🎧 Sahro 20-bob\nManba: @abdukarim_mirzayev_kanali",
  });
});

bot.hears("🎧 Sahro 21-30-qismlar", async (ctx) => {
  const sahro_id21 = "https://t.me/abdukarim_mirzayev_kanali/3741";
  const sahro_id22 = "https://t.me/abdukarim_mirzayev_kanali/3780";
  const sahro_id23 = "https://t.me/abdukarim_mirzayev_kanali/3898";
  const sahro_id24 = "https://t.me/abdukarim_mirzayev_kanali/3973";
  const sahro_id25 = "https://t.me/abdukarim_mirzayev_kanali/4165";
  const sahro_id26_1 = "https://t.me/abdukarim_mirzayev_kanali/4714";
  const sahro_id26_2 = "https://t.me/abdukarim_mirzayev_kanali/4747";
  const sahro_id27_1 = "https://t.me/abdukarim_mirzayev_kanali/4784";
  const sahro_id27_2 = "https://t.me/abdukarim_mirzayev_kanali/4845";
  const sahro_id28_1 = "https://t.me/abdukarim_mirzayev_kanali/5018";
  const sahro_id28_2 = "https://t.me/abdukarim_mirzayev_kanali/5111";
  const sahro_id29_1 = "https://t.me/abdukarim_mirzayev_kanali/5503";
  const sahro_id29_2 = "https://t.me/abdukarim_mirzayev_kanali/5603";
  const sahro_id29_3 = "https://t.me/abdukarim_mirzayev_kanali/5788";
  const sahro_id30_1 = "https://t.me/abdukarim_mirzayev_kanali/5834";
  const sahro_id30_2 = "https://t.me/abdukarim_mirzayev_kanali/5877";

  await ctx.replyWithAudio(sahro_id21, {
    caption: "🎧 Sahro 21-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id22, {
    caption: "🎧 Sahro 22-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id23, {
    caption: "🎧 Sahro 23-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id24, {
    caption: "🎧 Sahro 24-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id25, {
    caption: "🎧 Sahro 25-bob\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id26_1, {
    caption: "🎧 Sahro 26-bob 1-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id26_2, {
    caption: "🎧 Sahro 26-bob 2-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id27_1, {
    caption: "🎧 Sahro 27-bob 1-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id27_2, {
    caption: "🎧 Sahro 27-bob 2-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id28_1, {
    caption: "🎧 Sahro 28-bob 1-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id28_2, {
    caption: "🎧 Sahro 28-bob 2-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id29_1, {
    caption: "🎧 Sahro 29-bob 1-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id29_2, {
    caption: "🎧 Sahro 29-bob 2-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id30_1, {
    caption: "🎧 Sahro 30-bob 1-qism\nManba: @abdukarim_mirzayev_kanali",
  });
  await ctx.replyWithAudio(sahro_id30_2, {
    caption: "🎧 Sahro 30-bob 2-qism\nManba: @abdukarim_mirzayev_kanali",
  });
});

// // // // // // // // // // // // // // // // // // // // // IQROR
bot.hears("🎧 Iqror", async (ctx) => {
  const photo = "https://t.me/muhammadnur_rasmiy/4542";
  const link1 = "https://t.me/muhammadnur_rasmiy/3856";
  const link2 = "https://t.me/muhammadnur_rasmiy/3875";
  const link3 = "https://t.me/muhammadnur_rasmiy/3890";
  const link4 = "https://t.me/muhammadnur_rasmiy/3907";
  const link5 = "https://t.me/muhammadnur_rasmiy/3926";
  const link6 = "https://t.me/muhammadnur_rasmiy/3939";
  const link7 = "https://t.me/muhammadnur_rasmiy/3948";
  const link8 = "https://t.me/muhammadnur_rasmiy/3983";
  const link9 = "https://t.me/muhammadnur_rasmiy/4017";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Iqror\n✍🏻 Xolid Ertug‘rul\n🎙 Muhammad Nur\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Iqror 1-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link2, {
    caption: "🎧 Iqror 2-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link3, {
    caption: "🎧 Iqror 3-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link4, {
    caption: "🎧 Iqror 4-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link5, {
    caption: "🎧 Iqror 5-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link6, {
    caption: "🎧 Iqror 6-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link7, {
    caption: "🎧 Iqror 7-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link8, {
    caption: "🎧 Iqror 8-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link9, {
    caption: "🎧 Iqror 9-qism\nManba: @muhammadnur_rasmiy",
  });
});

// // // // // // // // // // // // // // // // // // // // // IZLASH
bot.hears("🎧 Izlash", async (ctx) => {
  const photo = "https://t.me/qamarbooks/10728";
  const link1 = "https://t.me/muhammadnur_rasmiy/206";
  const link2 = "https://t.me/muhammadnur_rasmiy/209";
  const link3 = "https://t.me/muhammadnur_rasmiy/215";
  const link4 = "https://t.me/muhammadnur_rasmiy/221";
  const link5 = "https://t.me/muhammadnur_rasmiy/222";
  const link6 = "https://t.me/muhammadnur_rasmiy/248";
  const link7 = "https://t.me/muhammadnur_rasmiy/258";
  const link8 = "https://t.me/muhammadnur_rasmiy/263";
  const link9 = "https://t.me/muhammadnur_rasmiy/283";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Izlash\n✍🏻 Mehmet Yildiz\n🎙 Muhammad Nur\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Izlash 1-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link2, {
    caption: "🎧 Izlash 2-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link3, {
    caption: "🎧 Izlash 3-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link4, {
    caption: "🎧 Izlash 4-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link5, {
    caption: "🎧 Izlash 5-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link6, {
    caption: "🎧 Izlash 6-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link7, {
    caption: "🎧 Izlash 7-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link8, {
    caption: "🎧 Izlash 8-qism\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link9, {
    caption: "🎧 Izlash 9-qism\nManba: @muhammadnur_rasmiy",
  });
});

// // // // // // // // // // // // // // // // // // // // // ALFIDO
bot.hears("🎧 Alfido", async (ctx) => {
  const photo =
    "http://cdn.shopify.com/s/files/1/0675/4353/1793/products/909f9d76-f15e-4dc5-b483-3e9bed74d257.jpg?v=1670320260";
  const link1 = "https://t.me/alfido_audio/4";
  const link2 = "https://t.me/alfido_audio/5";
  const link3 = "https://t.me/alfido_audio/6";
  const link4 = "https://t.me/alfido_audio/7";
  const link5 = "https://t.me/alfido_audio/8";
  const link6 = "https://t.me/alfido_audio/9";
  const link7 = "https://t.me/alfido_audio/10";
  const link8 = "https://t.me/alfido_audio/11";
  const link9 = "https://t.me/alfido_audio/12";
  const link10 = "https://t.me/alfido_audio/13";
  const link11 = "https://t.me/alfido_audio/14";
  const link12 = "https://t.me/alfido_audio/15";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Alfido\n✍🏼 Onur Qoplon\n🎙 Sardor Ahmad\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Alfido 1-2-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link2, {
    caption: "🎧 Alfido 3-4-5-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link3, {
    caption: "🎧 Alfido 6-7-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link4, {
    caption: "🎧 Alfido 8-9-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link5, {
    caption: "🎧 Alfido 10-11-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link6, {
    caption: "🎧 Alfido 12-bo`lim\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link7, {
    caption: "🎧 Alfido 13-bo`lim\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link8, {
    caption: "🎧 Alfido 13-bo`lim davomi\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link9, {
    caption: "🎧 Alfido 14-15-16-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link10, {
    caption: "🎧 Alfido 17-18-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link11, {
    caption: "🎧 Alfido 19-20-21-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
  await ctx.replyWithAudio(link12, {
    caption: "🎧 Alfido 22-23-bo`limlar\nManba: @muhammadnur_rasmiy",
  });
});

// // // // // // // // // // // // // // // // // // // // // JUMALI
bot.hears("🎧 Jumali", async (ctx) => {
  const photo = "https://t.me/audio_toplam/19";
  const link1 = "https://t.me/audio_toplam/20";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧Jumali\n✍🏼 Mehmet Olaqosh\n🎙 Shams Solih\nManba: @shams_solih",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧Jumali to'liq\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // // // EY QIZIM
bot.hears("🎧 Ey qizim", async (ctx) => {
  const photo = "https://t.me/audio_toplam/25";
  const link1 = "https://t.me/audio_toplam/26";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧Ey qizim\n✍🏼 Mehmet Olaqosh\n🎙 Shams Solih\nManba: @audio_toplam",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧Ey qizim to'liq\nManba: @audio_toplam",
  });
});

// // // // // // // // // // // // // // // // BUGUN BOMDOD O'QIDINGIZMI
bot.hears("🎧 Bugun bomdod o'qidingizmi", async (ctx) => {
  const photo = "https://t.me/audio_toplam/53";
  const link = "https://t.me/audio_toplam/54";

  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Bugun bomdod o'qidingizmi\n✍🏻 Rog'ib Sirjoniy\n🎙 Shams Solih\nManba: @audio_toplam",
  });
  await ctx.replyWithAudio(link, {
    caption: "🎧 Bugun bomdod o'qidingizmi  to'liq\nManba: @audio_toplam",
  });
});

// // // // // // // // // // // // // // // // // // // // SO'NGGI TO'FON
bot.hears("🎧 So`nggi to`fon", async (ctx) => {
  const photo = "https://t.me/audio_toplam/21";
  const link1 = "https://t.me/audio_toplam/22";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧 So`nggi to`fon \n✍🏻Ahmad Lutfiy Qozonchi\n🎙Shams Solih",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 So`nggi to`fon to'liq\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // // VIDO CHO'QQISI
bot.hears("🎧 Vido cho`qqisi", async (ctx) => {
  const photo = "https://t.me/audio_toplam/27";
  const link1 = "https://t.me/audio_toplam/28";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧 Vido cho`qqisi \n✍🏻Mehmet Olaqosh\n🎙Shams Solih",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Vido cho`qqisi to'liq\nManba: @shams_solih",
  });
});

// // // // // // // // // // // // // // // // // // // AR_RAHIQ AL_MAXTUM
bot.hears("🎧 Ar-Rahiq Al-Maxtum", async (ctx) => {
  const photo = "https://t.me/audio_toplam/29";
  const link1 = "https://t.me/audio_toplam/30";
  const link2 = "https://t.me/audio_toplam/31";
  await ctx.replyWithPhoto(photo, {
    caption:
      "🎧 Ar-Rahiq Al-Maxtum \n✍🏻Safiyurrahmon Muborakfuriy\n🎙Shams Solih",
  });
  await ctx.replyWithAudio(link1, {
    caption:
      "🎧 Ar-Rahiq Al-Maxtum 1-30-qismlar\n08:21 - 1-qism\n34:52 - 2-qism\n51:21 - 3-qism01:21:21 - 4-qism\n01:42:46 - 5-qism\n02:01:23 - 6-qism\n02:19:53 - 7-qism\n02:40:06 - 8-qism\n02:55:22 - 9-qism\n03:16:03 - 10-qism\n03:27:49 - 11-qism\n03:42:27 - 12-qism\n03:56:41 - 13-qism\n04:19:00 - 14-qism\n04:37:58 - 15-qism\n04:54:05 - 16-qism\n05:10:32 - 17-qism\n05:25:43 - 18-qism\n05:44:54 - 19-qism\n06:01:57 - 20-qism\n06:18:37 - 21-qism\n06:37:50 - 22-qism\n06:55:13 - 23-qism\n07:16:37 - 24-qism\n07:34:28 - 25-qism\n07:50:44 - 26-qism\n08:11:56 - 27-qism\n08:32:59 - 28-qism\n08:47:39 - 29-qism\n09:08:53 - 30-qism",
  });
  await ctx.replyWithAudio(link2, {
    caption:
      "🎧 Ar-Rahiq Al-Maxtum 31-76-qismlar\n00:23 - 31-qism\n18:56 - 32-qism\n35:46 - 33-qism\n47:37 - 34-qism\n01:09:41 - 35-qism\n01:27:52 - 36-qism\n01:42:38 - 37-qism\n02:01:36 - 38-qism\n02:23:44 - 39-qism\n02:46:12 - 40-qism\n03:05:54 - 41-qism\n03:25:06 - 42-qism\n03:44:53 - 43-qism\n04:04:36 - 44-qism\n04:28:57 - 45-qism\n04:46:25 - 46-qism\n05:06:24 - 47-qism\n05:27:30 - 48-qism\n05:44:52 - 49-qism\n06:05:29 - 50-qism\n06:25:44 - 51-qism\n06:45:19 - 52-qism\n07:07:06 - 53-qism\n07:29:55 - 54-qism\n07:53:19 - 55-qism\n08:12:56 - 56-qism\n08:35:41 - 57-qism\n08:53:14 - 58-qism\n09:19:12 - 59-qism\n09:41:36 - 60-qism\n10:03:51 - 61-qism\n10:26:12 - 62-qism\n10:46:27 - 63-qism\n11:06:44 - 64-qism\n11:30:06 - 65-qism\n11:53:55 - 66-qism\n12:14:31 - 67-qism\n12:36:28 - 68-qism\n12:58:00 - 69-qism\n13:20:08 - 70-qism\n13:40:43 - 71-qism\n14:07:05 - 72-qism\n14:22:39 - 73-qism\n14:40:07 - 74-qism\n14:59:38 - 75-qism\n15:16:38 - 76-qism",
  });
});

// // // // // // // // // // // // // // // // // // // // VIDO CHO'QQISI
bot.hears("🎧 Riyozus solihiyn", async (ctx) => {
  const photo = "https://t.me/audio_toplam/43";
  const link1 = "https://t.me/audio_toplam/44";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧 Riyozus solihiyn \n✍🏻Mehmet Olaqosh\n🎙Shams Solih",
  });
  await ctx.replyWithAudio(link1, {
    caption: "🎧 Riyozus solihiyn to'liq\nManba: @audio_toplam",
  });
});

// // // // // // // // // // // // // // // // Islom diniga umumiy ta’rif
bot.hears("🎧 Islom diniga umumiy ta’rif", async (ctx) => {
  const photo =
    "https://th.bing.com/th/id/OIP.AWAonbzAG63JE-jsF53uHAHaEK?rs=1&pid=ImgDetMain";
  const link1 = "https://t.me/audiokitoblar_islom/772";
  const link2 = "https://t.me/audiokitoblar_islom/773";
  const link3 = "https://t.me/audiokitoblar_islom/774";
  const link4 = "https://t.me/audiokitoblar_islom/775";
  const link5 = "https://t.me/audiokitoblar_islom/776";
  const link6 = "https://t.me/audiokitoblar_islom/777";
  const link7 = "https://t.me/audiokitoblar_islom/778";
  const link8 = "https://t.me/audiokitoblar_islom/780";
  const link9 = "https://t.me/audiokitoblar_islom/781";
  const link10 = "https://t.me/audiokitoblar_islom/782";
  const link11 = "https://t.me/audiokitoblar_islom/783";
  const link12 = "https://t.me/audiokitoblar_islom/784";
  const link13 = "https://t.me/audiokitoblar_islom/785";
  const link14 = "https://t.me/audiokitoblar_islom/786";
  const link15 = "https://t.me/audiokitoblar_islom/787";
  const link16 = "https://t.me/audiokitoblar_islom/788";
  const link17 = "https://t.me/audiokitoblar_islom/789";
  const link18 = "https://t.me/audiokitoblar_islom/790";
  const link19 = "https://t.me/audiokitoblar_islom/792";
  const link20 = "https://t.me/audiokitoblar_islom/793";

  await ctx.replyWithPhoto(photo, {
    caption: "🎧 Islom diniga umumiy ta'rif \n✍🏻Ali Tantoviy\n🎙Shams Solih",
  });
  await ctx.replyWithAudio(link1, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 1-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link2, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 2-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link3, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 3-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link4, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 4-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link5, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 5-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link6, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 6-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link7, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 7-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link8, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 8-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link9, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 9-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link10, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 10-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link11, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 11-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link12, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 12-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link13, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 13-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link14, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 14-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link15, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 15-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link16, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 16-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link17, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 17-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link18, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 18-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link19, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 19-qism\nManba: @audiokitoblar_islom",
  });
  await ctx.replyWithAudio(link20, {
    caption:
      "🎧 Islom diniga umumiy ta'rif 20-qism\nManba: @audiokitoblar_islom",
  });
});
