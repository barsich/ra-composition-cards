import React from 'react';
import './App.css';
import Card from './components/Card';
import CardWithPic from './components/CardWithPic';
import CardBody from './components/CardBody';
import pic from './images/rat.jpg';

const card = {
  title: 'Card title',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonText: 'Go somewhere',
};

const anotherProps = {
  title: 'Special title treatment',
  text: 'With supporting text below as a natural lead-in to additional content.',
};

const anotherCard = {...card, ...anotherProps}

export default function App() {
  return (
    <div className="container">
      <Card> 
        <CardBody card={anotherCard} />
      </Card>
      <CardWithPic>
        <img src={pic} alt="" className="card-img-top" />
        <CardBody card={card} />
      </CardWithPic>
    </div>
  );
}
