import React, { Component } from 'react';
import './App.css';
import Agris from './components/agris'

const agric = {
  'id':1,
  'image': 'https://placeimg.com/480/360/any',
  'name': '양파',
  'price': '3000',
  'gender': '수',
  'origin': '대한민국',
  'certi': '해당 없음'
}

class App extends Component {
render() {
  return (
    <Agris
    id={agric.id}
    image={agric.image}
    name={agric.name}
    price={agric.price}
    gender={agric.gender}
    origin={agric.origin}
    certi={agric.certi}
    />
    
  );
  }
}
export default App;
