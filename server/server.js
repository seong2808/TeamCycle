const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');


// app.get('/api/host', (req, res) => {
//     res.send({ host : '' });
// })

// app.get('/api/test', (req, res) => {
//     db.query("select * from test", (err, data) => {
//         if(!err) {
//             res.send(data);

//         } else {
//             console.log(err);
//             res.send(err);
//         }
//     })
// })


app.listen(8080, function () {
    console.log(`Server On : http://localhost:8080/`)
  }); 

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
