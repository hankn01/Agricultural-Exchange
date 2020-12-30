import React, { Component } from 'react';
import './App.css';
import Agris from './components/agris'

const agric = [{
  'id':1,
  'image': 'https://placeimg.com/480/360/1',
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
  'name': '무',
  'price': '1500',
  'gender': '해당 없음',
  'origin': '대한민국',
  'certi': '해당 없음'
}
]

class App extends Component {
render() {
  return (
    <div>
      {
    agric.map(c => {
      return (
        <Agris
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        price={c.price}
        gender={c.gender}
        origin={c.origin}
        certi={c.certi}
        />
      );

    })
  }
    </div>
  );
  }
}
export default App;
