const express = require('express');
const app = express();

app.get('/api/v1/ubs/account', (req, res) => {
  res.send();
});

app.listen(3000, () =>{
  console.log('listening on: http://localhost:3000');
});
