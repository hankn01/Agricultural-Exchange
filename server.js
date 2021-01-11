const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.options('*', cors());

app.get('/api/agris', (req, res) => {
    res.send(
      [
        {
            'id':1,
            'image': 'http://placeimg.com/480/360/1',
            'name': '양파',
            'price': '3000',
            'gender': '수',
            'origin': '대한민국',
            'certi': '해당 없음'
          },
          {
            'id':2,
            'image': 'https://placeimg.com/480/360/2',
            'name': '배추',
            'price': '1500',
            'gender': '해당 없음',
            'origin': '대한민국',
            'certi': '해당 없음'
          },
          {
            'id':3,
            'image': 'https://placeimg.com/480/360/3',
            'name': '파프리카',
            'price': '1500',
            'gender': '해당 없음',
            'origin': '대한민국',
            'certi': '해당 없음'
          }
        ]
          
    );


});
app.listen(port, ()=> console.log(`Listening on port ${port}`));