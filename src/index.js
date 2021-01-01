const express = require('express');
const config = require('config');
const app = express();

app.use(express.json());

let response = {};


const { port: PORT, host, prefix } = config.get('api');

app.get(`${prefix}/account`, (req, res) => {
  res.send(response);
});

app.put(`${prefix}/account`, (req, res) => {
  const { body: response } = req;
  
  res.send(response);
});

app.delete(`${prefix}/account`, (req, res) => {
  response = {};

  res.send(response);
})

app.listen(PORT, () => {
  console.log(`listening on: ${host}:${PORT}`);
});
