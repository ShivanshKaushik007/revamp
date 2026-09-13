const https = require('https');

const data = JSON.stringify({
  service_id: 'service_au0opt6',
  template_id: 'template_n4eku2e',
  user_id: 'uyMnPD0BeZa90REzO',
  template_params: {
    first_name: 'Test',
    last_name: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    message: 'Test message',
    service: 'Web Development'
  }
});

const req = https.request('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Origin': 'http://localhost:3000',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Body:', body);
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(data);
req.end();
