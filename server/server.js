const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const db = require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user: conf.user,
//   password: conf.password,
//   port: conf.port,
//   database: conf.database
// });
// connection.connect();


// app.get('/api/customers', (req,res) => {
//   connection.query(
//     "SELECT * FROM user_info",
//     (err, rows, fields) => {
//       res.send(rows);
//     }
//   );
// });

app.listen(port, () => console.log(`Server On : http://localhost:${port}/`));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
