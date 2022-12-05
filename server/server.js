const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`Server On : http://localhost:${PORT}/`));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('api/host', (req,res) => {
  res.send({host: 'teamsysle'});
})

app.get('/api/bike_port', (req, res) => {
  db.query("select * from bike_port", (err, data) => {
      if(!err) {
          res.send(data);

      } else {
          console.log(err);
          res.send(err);
      }
  })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
