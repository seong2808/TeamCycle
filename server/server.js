const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const db = require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/build')));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/bike_port', (req, res) => {
  connection.query(
    "select * from bike_port",
    (err, data) => {
            if(!err) {
                res.send(data);
      
            } else {
                console.log(err);
                res.send(err);
            }
  })
});

// app.get('/api/bike_port', (req, res) => {
//   db.query("select * from bike_port", (err, data) => {
//       if(!err) {
//           res.send(data);

//       } else {
//           console.log(err);
//           res.send(err);
//       }
//   })
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
app.listen(PORT, () => console.log(`Server On : http://localhost:${PORT}/`));
