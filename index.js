require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.log('❌ خطأ: لم يتم العثور على التوكن في ملف .env');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log('✅ تم تشغيل البوت بنجاح وهو ينتظر الرسائل...');

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'أهلاً بك! 👋');
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'هذه رسالة المساعدة.');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  bot.sendMessage(msg.chat.id, `قلت: ${match[1]}`);
});
