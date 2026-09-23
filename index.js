const TelegramBot = require('node-telegram-bot-api');

const token = '8921351248:AAE0N-uM9e932vyBJRmwURn1dla1XGrG5Mw';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'أهلاً بك! 👋');
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'هذه رسالة المساعدة.');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  bot.sendMessage(msg.chat.id, `قلت: ${match[1]}`);
});
