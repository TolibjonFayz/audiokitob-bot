const { bot } = require("../core/bot");
const {
  ozbmainKeyboard,
  dunyoniishlarikey,
} = require("../lib/ozbekadabkeyboards");

bot.hears("🎧 O`zbek adabiyoti", (ctx) => {
  ctx.reply("Tanlang 👇", ozbmainKeyboard);
});

// // // // // // // // // // // // // // // // // O'TKAN KUNLAR
bot.hears("🎧 O`tkan kunlar", async (ctx) => {
  const link1 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10395:01-o-tkan-kunlar";
  const link2 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10396:02-o-tkan-kunlar";
  const link3 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10397:03-o-tkan-kunlar";
  const link4 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10398:04-o-tkan-kunlar";
  const link5 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10399:05-o-tkan-kunlar";
  const link6 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10400:06-o-tkan-kunlar";
  const link7 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10401:07-o-tkan-kunlar";
  const link8 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10402:08-o-tkan-kunlar";
  const link9 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10403:09-o-tkan-kunlar";
  const link10 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10404:10-o-tkan-kunlar";
  const link11 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10405:11-o-tkan-kunlar";
  const link12 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10406:12-o-tkan-kunlar";
  const link13 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10407:13-o-tkan-kunlar";
  const link14 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10408:14-o-tkan-kunlar";
  const link15 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10409:15-o-tkan-kunlar";
  const link16 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10410:16-o-tkan-kunlar";
  const link17 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10411:17-o-tkan-kunlar";
  const link18 =
    "https://ziyouz.com/kutubxona/category/214-utkan-kunlar?download=10412:18-o-tkan-kunlar";

  await ctx.replyWithAudio(link1, {
    caption: "O`tkan kunlar 1-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link2, {
    caption: "O`tkan kunlar 2-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link3 + "\nO`tkan kunlar 3-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link4, {
    caption: "O`tkan kunlar 4-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link5, {
    caption: "O`tkan kunlar 5-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link6, {
    caption: "O`tkan kunlar 6-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link7 + "\nO`tkan kunlar 7-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link8, {
    caption: "O`tkan kunlar 8-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link9, {
    caption: "O`tkan kunlar 9-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link10, {
    caption: "O`tkan kunlar 10-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link11, {
    caption: "O`tkan kunlar 11-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link12, {
    caption: "O`tkan kunlar 12-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link13, {
    caption: "O`tkan kunlar 13-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link14, {
    caption: "O`tkan kunlar 14-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link15, {
    caption: "O`tkan kunlar 15-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link16, {
    caption: "O`tkan kunlar 16-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link17 + "O`tkan kunlar 17-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link18, {
    caption: "O`tkan kunlar 18-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

// // // // // // // // // // // // // // // //  Kecha va kunduz
bot.hears("🎧 Kecha va kunduz", async (ctx) => {
  const link1 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10452:01-kecha-va-kunduz";
  const link2 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10453:02-kecha-va-kunduz";
  const link3 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10454:03-kecha-va-kunduz";
  const link4 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10455:04-kecha-va-kunduz";
  const link5 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10456:05-kecha-va-kunduz";
  const link6 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10457:06-kecha-va-kunduz";
  const link7 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10458:07-kecha-va-kunduz";
  const link8 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10459:08-kecha-va-kunduz";
  const link9 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10460:09-kecha-va-kunduz";
  const link10 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10461:10-kecha-va-kunduz";
  const link11 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10462:11-kecha-va-kunduz";
  const link12 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10463:12-kecha-va-kunduz";
  const link13 =
    "https://ziyouz.com/kutubxona/category/217-kecha-va-kunduz?download=10464:13-kecha-va-kunduz";

  await ctx.replyWithAudio(link1, {
    caption: "Kecha va kunduz 1-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link2, {
    caption: "Kecha va kunduz 2-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link3 + "\nKecha va kunduz 3-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.reply(
    link4 + "\nKecha va kunduz 4-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link5, {
    caption: "Kecha va kunduz 5-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link6, {
    caption: "Kecha va kunduz 6-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link7, {
    caption: "Kecha va kunduz 7-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link8, {
    caption: "Kecha va kunduz 8-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link9, {
    caption: "Kecha va kunduz 9-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link10, {
    caption: "Kecha va kunduz 10-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link11, {
    caption: "Kecha va kunduz 11-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link12 + "\nKecha va kunduz 12-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link13, {
    caption: "Kecha va kunduz 13-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

// // // // // // // // // // // //  Daftar hoshiyasidagi bitiklar
bot.hears("🎧 Daftar hoshiyasidagi bitiklar", async (ctx) => {
  const link1 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5063:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-01";
  const link2 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5064:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-02";
  const link3 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5065:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-03";
  const link4 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5066:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-04";
  const link5 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5067:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-05";
  const link6 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5068:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-06";
  const link7 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5069:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-07";
  const link8 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5070:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-08";
  const link9 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5071:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-09";
  const link10 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5072:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-10";
  const link11 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5073:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-11";
  const link12 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5074:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-12";
  const link13 =
    "https://ziyouz.com/kutubxona/category/131-o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar?download=5075:o-tkir-hoshimov-daftar-hoshiyasidagi-bitiklar-13";

  await ctx.replyWithAudio(link1, {
    caption:
      "Daftar hoshiyasidagi bitiklar 1-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link2, {
    caption:
      "Daftar hoshiyasidagi bitiklar 2-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link3, {
    caption:
      "Daftar hoshiyasidagi bitiklar 3-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link4, {
    caption:
      "Daftar hoshiyasidagi bitiklar 4-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link5, {
    caption:
      "Daftar hoshiyasidagi bitiklar 5-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link6, {
    caption:
      "Daftar hoshiyasidagi bitiklar 6-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link7, {
    caption:
      "Daftar hoshiyasidagi bitiklar 7-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link8, {
    caption:
      "Daftar hoshiyasidagi bitiklar 8-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link9, {
    caption:
      "Daftar hoshiyasidagi bitiklar 9-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link10, {
    caption:
      "Daftar hoshiyasidagi bitiklar 10-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link11, {
    caption:
      "Daftar hoshiyasidagi bitiklar 11-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link12, {
    caption:
      "Daftar hoshiyasidagi bitiklar 12-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link13, {
    caption:
      "Daftar hoshiyasidagi bitiklar 13-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

// // // // // // // // // // // // // // // // Dunyoning ishlari
bot.hears("🎧 Dunyoning ishlari", async (ctx) => {
  await ctx.reply("Tanlang 👇", dunyoniishlarikey);
});

bot.hears("🎧 Dunyoning ishlari 1-10-qismlar", async (ctx) => {
  const link1 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10362:01-dunyoning-ishlari-oq-oydin-kechalar";
  const link2 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10363:02-dunyoning-ishlari-tasalli";
  const link3 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10364:03-dunyoning-ishlari-tush";
  const link4 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10365:04-dunyoning-ishlari-haqqush";
  const link5 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10366:05-dunyoning-ishlari-qarz";
  const link6 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10367:06-dunyoning-ishlari-ikki-afsona";
  const link7 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10368:07-dunyoning-ishlari-gilam-paypoq";
  const link8 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10369:08-dunyoning-ishlari-eng-og-ir-gunoh";
  const link9 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10370:09-dunyoning-ishlari-bola-yig-isi";
  const link10 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10371:10-dunyoning-ishlari-xiyonat";

  await ctx.replyWithAudio(link1, {
    caption: "Dunyoning ishlari 1-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link2, {
    caption: "Dunyoning ishlari 2-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link3, {
    caption: "Dunyoning ishlari 3-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link4, {
    caption: "Dunyoning ishlari 4-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link5, {
    caption: "Dunyoning ishlari 5-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link6, {
    caption: "Dunyoning ishlari 6-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link7, {
    caption: "Dunyoning ishlari 7-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link8, {
    caption: "Dunyoning ishlari 8-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link9, {
    caption: "Dunyoning ishlari 9-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link10, {
    caption: "Dunyoning ishlari 10-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

bot.hears("🎧 Dunyoning ishlari 11-20-qismlar", async (ctx) => {
  const link11 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10372:11-dunyoning-ishlari-surat";
  const link12 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10373:12-dunyoning-ishlari-kitob";
  const link13 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10374:13-dunyoning-ishlari-mahallaning-shayxi";
  const link14 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10374:13-dunyoning-ishlari-mahallaning-shayxi";
  const link15 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10376:15-dunyoning-ishlari-qanoat";
  const link16 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10377:16-dunyoning-ishlari-sovchilar";
  const link17 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10378:17-dunyoning-ishlari-ermon-buvaning-tilagi";
  const link18 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10379:18-dunyoning-ishlari-mening-acha-xolam";
  const link19 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10380:19-dunyoning-ishlari-imon";
  const link20 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10381:20-dunyoning-ishlari-opamni-topib-oldim";

  await ctx.replyWithAudio(link11, {
    caption: "Dunyoning ishlari 11-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link12, {
    caption: "Dunyoning ishlari 12-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link13, {
    caption: "Dunyoning ishlari 13-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link14, {
    caption: "Dunyoning ishlari 14-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link15, {
    caption: "Dunyoning ishlari 15-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link16 +
      "\n\nDunyoning ishlari 16-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.reply(
    link17 +
      "\n\nDunyoning ishlari 17-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link18, {
    caption: "Dunyoning ishlari 18-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link19 +
      "\n\nDunyoning ishlari 19-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link20, {
    caption: "Dunyoning ishlari 20-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

bot.hears("🎧 Dunyoning ishlari 21-33-qismlar", async (ctx) => {
  const link21 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10382:21-dunyoning-ishlari-bozor";
  const link22 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10383:22-dunyoning-ishlari-po-stdumbali-moshkichiri";
  const link23 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10384:23-dunyoning-ishlari-oltin-baldoq";
  const link24 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10385:24-dunyoning-ishlari-o-ris-bolaning-oyisi";
  const link25 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10386:25-dunyoning-ishlari-xo-ja";
  const link26 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10387:26-dunyoning-ishlari-oy-quyoshdan-nur-oladi";
  const link27 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10388:27-dunyoning-ishlari-pistachi";
  const link28 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10389:28-dunyoning-ishlari-usta";
  const link29 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10390:29-dunyoning-ishlari-havas";
  const link30 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10391:30-dunyoning-ishlari-kaltakesakning-dumi";
  const link31 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10392:31-dunyoning-ishlari-alla";
  const link32 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10393:32-dunyoning-ishlari-oq-marmar-qora-marmar";
  const link33 =
    "https://ziyouz.com/kutubxona/category/52-o-tkir-hoshimov-dunyoning-ishlari?download=10394:33-dunyoning-ishlari-iltijo";

  await ctx.replyWithAudio(link21, {
    caption: "Dunyoning ishlari 21-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link22, {
    caption: "Dunyoning ishlari 22-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link23 +
      "\n\nDunyoning ishlari 23-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link24, {
    caption: "Dunyoning ishlari 24-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link25, {
    caption: "Dunyoning ishlari 25-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(
    link26 +
      "\n\nDunyoning ishlari 26-qism\nManba: https://ziyouz.com/kutubxona/"
  );
  await ctx.replyWithAudio(link27, {
    caption: "Dunyoning ishlari 27-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link28, {
    caption: "Dunyoning ishlari 28-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.reply(link29, {
    caption: "Dunyoning ishlari 29-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link30, {
    caption: "Dunyoning ishlari 30-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link31, {
    caption: "Dunyoning ishlari 31-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link32, {
    caption: "Dunyoning ishlari 32-qism\nManba: https://ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link33, {
    caption: "Dunyoning ishlari 33-qism\nManba: https://ziyouz.com/kutubxona/",
  });
});

bot.hears("Ortga(3)", (ctx) => {
  ctx.reply("Tanlang 👇", ozbmainKeyboard);
});

// // // // // // // // // // // // // // // // // // //  Ibratli hikoyatlar
bot.hears("🎧 Ibratli hikoyatlar", async (ctx) => {
  const link1 =
    "https://ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5416:20-tiyinga-sotilmagan-iymon";
  const link2 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5417:aks-sado-va-hayot";
  const link3 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5418:aqiqaning-hikmati";
  const link4 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=1040:aql-ustunligi";
  const link5 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5419:bir-yaxshilikka-o-n-yaxshilik";
  const link6 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5420:bola-va-olma-daraxti";
  const link7 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5421:chin-dildan-istasang";
  const link8 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5422:chin-tavbaning-samarasi";
  const link9 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5423:doimo-g-olib-edilar";
  const link10 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=1041:duradgor";
  const link11 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5424:ehson-va-sadaqaning-xosiyati";
  const link12 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5425:eng-yomon-dard-nima";
  const link13 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5426:eski-chorig-ingni-unutma";
  const link14 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=8876:farzand-jazo-emas-mukofot";
  const link15 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5427:g-olib-bo-lishni-istasangiz";
  const link16 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5428:haqiqiy-boylik";
  const link17 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5429:har-narsa-ham-ko-ringanidek-emas";
  const link18 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5430:hazrati-umar-o-pgan-bosh";
  const link19 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5431:iltijoning-ijobati";
  const link20 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=8877:ishq-sururi";
  const link21 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=8878:kartoshka-bahona";
  const link22 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5432:ko-ylagi-yamoq-bola";
  const link23 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5433:loy-tekkan-devor";
  const link24 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5434:masjidga-borganlar-va-namozga-kelganlar";
  const link25 =
    "https://n.ziyouz.com/kutubxona/category/50-ibratli-hikoyatlar?download=5480:ming-dinordan-qimmat-sharaf";

  await ctx.replyWithAudio(link1, {
    caption:
      "20 tiyinga sotilmagan iymon\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link2, {
    caption: "Aks sado va hayot\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link3, {
    caption: "Aqiqaning hikmati\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link4, {
    caption: "Aql ustunligi\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link5, {
    caption:
      "Bir yaxshilikda o`n yaxshilik\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link6, {
    caption: "Bola va olma daraxti\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link7, {
    caption: "Chin dildan istasang\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link8, {
    caption: "Chin tavbaning samarasi\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link9, {
    caption: "Doimo g`olib edilar\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link10, {
    caption: "Duradgor\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link11, {
    caption:
      "Ehson va sadaqaning xosiyati\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link12, {
    caption: "Eng yomon dars nima\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link13, {
    caption: "Eski chorog`ingni unutma\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link14, {
    caption:
      "Farzand jazo emas - mukofot\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link15, {
    caption:
      "G`olib bo`lishni istasangizc\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link16, {
    caption: "Haqiqiy boylik\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link17, {
    caption:
      "Har narsa ham ko`ringanidek emas\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link18, {
    caption: "Hazrati Umar o`pgan bosh\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link19, {
    caption: "Iltijoning ijobati\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link20, {
    caption: "Ishq sururi\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link21, {
    caption: "Kartoshka bahona\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link22, {
    caption: "Ko`ylagi yamoq bola\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link23, {
    caption: "Loy tekkan devor\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link24, {
    caption:
      "Masjidga borganlar va namozga kelganlar\nManba: https://n.ziyouz.com/kutubxona/",
  });
  await ctx.replyWithAudio(link25, {
    caption:
      "Ming dinordan qimmat sharaf\nManba: https://n.ziyouz.com/kutubxona/",
  });
});
