const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require('./config/db');

app.get('api/host', (req,res) => {
  res.send({host: 'teamsysle'});
})



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });