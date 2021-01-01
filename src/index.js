const express = require('express');
const app = express();

const PORT = 3000;

app.get('/api/v1/ubs/account', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`);
});
