const mineflayer = require('mineflayer');

const adet = 500; // Bot sayısı
const host = 'SUNUCUADRESI'; // Örnek: 'play.craftrise.tc'
const prefix = 's4turnxd'; // Bot ismi prefixi
const komut = '/register 1234 1234'; // Yazılacak komut
const botlar = [];

for (let i = 0; i < adet; i++) {
  const bot = mineflayer.createBot({
    host: host,
    username: `${prefix}${i + 1}`,
    version: false // Sunucu hangi sürümse otomatik algılasın
  });

  botlar.push(bot);

  bot.on('login', () => {
    console.log(`${bot.username} giriş yaptı`);
    setTimeout(() => {
      bot.chat(komut);
    }, 3000); // 3 saniye bekleyip komutu yaz
  });

  bot.on('end', () => {
    console.log(`${bot.username} sunucudan atıldı`);
  });

  bot.on('error', (err) => {
    console.log(`${bot.username} hata aldı:`, err.message);
  });
}
