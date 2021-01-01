const express = require('express');
const config = require('config');
const app = express();

const { port: PORT } = config.get('api');

app.get('/api/v1/ubs/account', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`);
});
