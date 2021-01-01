const express = require('express');
const config = require('config');
const app = express();

const { port: PORT, host, prefix } = config.get('api');

app.get(`${prefix}/account`, (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`listening on: ${host}:${PORT}`);
});
