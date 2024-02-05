const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
config();
const bot = new Telegraf("5587320189:AAEQhSiZB6KuTnDTx86j70qZtNuTPb0FBOs");

bot.launch();

module.exports = { bot };
