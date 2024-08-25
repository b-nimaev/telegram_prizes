const { Telegraf } = require("telegraf");

// Вставьте сюда ваш токен
const bot = new Telegraf("7380240416:AAEQAGUoVqcw0EcEMGy9c5qoOlaRunVMkaI");

// Обработчик команды /start
bot.start((ctx) => {
  ctx.reply("Привет! Нажми на кнопку ниже, чтобы открыть мини-приложение.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть мини-приложение",
            web_app: {
              url: "https://b54a-65-21-153-43.ngrok-free.app",
            },
          },
        ],
      ],
    },
  });
});

// Запуск бота
bot.launch();

// Остановка бота на Ctrl+C
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
