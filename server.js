const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.options('*', cors());

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

const multer = require('multer');
const upload = multer({dest: './upload'})


app.get('/api/agris', (req, res) => {
    connection.query(
      "SELECT * FROM AGRICTABLE",
      (err, rows, fields) => {
        res.send(rows);
      }
    
     
    );


});

app.use('/image', express.static('./upload'));

app.post('/api/agris', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO AGRICTABLE VALUES (null, ?,?,?,?,?,?)';
  let image = '/image/' + req.file.fileName;
  let name = req.body.name;
  let price = req.body.price;
  let gender = req.body.gender;
  let origin = req.body.origin;
  let certi = req.body.certi;
  console.log(name);
  console.log(image);
  console.log(price);
  console.log(gender);
  console.log(origin);
  console.log(certi);
  let params = [image, name, price, gender, origin, certi];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
    })


});
app.listen(port, ()=> console.log(`Listening on port ${port}`));