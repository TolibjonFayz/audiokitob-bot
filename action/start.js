const { bot } = require("../core/bot");
const User = require("../db/User");
const { startkeyboard } = require("../lib/ilsomiykeyboards");

bot.start(async (ctx) => {
  ctx.replyWithHTML(
    "Assalomu alaykum. <b>Audio Kitob</b> botga xush kelibsiz.\n\nBu botda siz har xil turkumdagi audiokitoblarni topishingiz mumkin.\nPastdagi bo`limlardan birini tanlang 👇. \n\nYordam - /help",
    startkeyboard
  );
  try {
    const newUser = {
      userid: ctx.from.id,
      username: ctx.from.username,
      first_name: ctx.from.first_name,
    };

    const isExists = await User.findOne({ userid: newUser.userid });
    if (isExists == null) {
      await User.create(newUser)
        .then(async (res) => {
          const count = await User.find();
          ctx.telegram.sendMessage(
            process.env.ADMIN,
            `${newUser.first_name} bazaga qo'shildi.\nBazadagi jami foydalanuvchilar soni ${count.length}ta`
          );
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Eski user start bosdi");
    }
  } catch (err) {
    console.log(err);
    ctx.replyWithHTML(`<b>Ko'zda tutilmagan xatolik</b> \n ${err}`);
    console.log(`<b>Ko'zda tutilmagan xatolik</b> \n ${err}`);
  }
});
