const express = require('express');
const app = express();

// Parse JSON and URL-encoded data
app.use(express.json());

// Main Test Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Node.js is running successfully on SiteGround!',
    timestamp: new Date().toISOString(),
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      memoryUsage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`
    }
  });
});

// Health check endpoint for testing HTTP status codes
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Determine binding target (Unix socket assigned by Nginx/suexec or standard PORT)
const listenTarget = process.env.PORT || process.env.PASSENGER_SOCKET || 3000;

app.listen(listenTarget, () => {
  console.log(`[Node App] Listening on ${listenTarget}`);
});
