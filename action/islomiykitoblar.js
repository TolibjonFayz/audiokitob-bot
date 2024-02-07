const { bot } = require("../core/bot");
const {
  islomiykeyboard1,
  startkeyboard,
  islomiykeyboard2,
  islomiykeyboard3,
  islomiykeyboard4,
  halqakey,
  halolluqmakey,
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

bot.hears("➡ 4-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard4);
});

bot.hears("⬅ 3-varoq", (ctx) => {
  ctx.reply("Tanlang 👇", islomiykeyboard3);
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

// // // // // // // // // // // // // // // // // // // Halol luqma
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
