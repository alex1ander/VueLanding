const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// ЗАМЕНИ на свои значения
const TELEGRAM_BOT_TOKEN = 'твой_бот_токен';
const TELEGRAM_CHAT_ID = 'твой_chat_id';

app.use(cors());
app.use(bodyParser.json());

app.post('/send-lead', async (req, res) => {
  const { name, phone, message } = req.body;

  const text = `
🚀 Новый лид:
👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение: ${message || '–'}
`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error.response?.data || error.message);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
