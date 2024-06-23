const { Telegraf } = require("telegraf");

const TOKEN = "7162733485:AAE7qf0rbq258QuYM6WepPK4hOLh4htUHZA";
const bot = new Telegraf(TOKEN);

const web_link = "https://jazzy-cajeta-2816b4.netlify.app/";

bot.start((ctx) => {
  console.log(ctx.update.message.text);
  console.log(ctx.update.message.from);

  return ctx.reply(
    `Assalomu aleykum ${ctx.update.message.from.first_name}! Siz bizning yangi CombatGame 🎮 o'yinimizga tashrif buyurdingiz... \nMuallif: @MurodjonHalilov`,
    {
      reply_markup: {
        keyboard: [
          [{ text: "O'yinni boshlash 🎮", web_app: { url: web_link } }],
        ],
      },
    }
  );
});

bot.launch();
