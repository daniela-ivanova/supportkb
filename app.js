const http = require('http');

// SiteGround's Passenger assigns a dynamic port via process.env.PORT
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SiteGround Node.js Test</title>
      <style>
        body { font-family: system-ui, sans-serif; padding: 2rem; background: #f4f6f8; color: #333; }
        .card { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 500px; margin: auto; }
        h1 { color: #2e7d32; font-size: 1.5rem; }
        code { background: #eee; padding: 0.2rem 0.4rem; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>✅ Node.js is Running!</h1>
        <p>Your Node.js application is successfully hosted and running on SiteGround via Phusion Passenger.</p>
        <hr />
        <p><strong>Node Version:</strong> <code>${process.version}</code></p>
        <p><strong>Assigned Port:</strong> <code>${process.env.PORT || 'Default (3000)'}</code></p>
        <p><strong>Server Time:</strong> <code>${new Date().toISOString()}</code></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
