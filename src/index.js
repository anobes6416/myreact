import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styles from './App.css';

const pizzaData = [
 {
  name: "focaccia",
  ingredients: "bread with italian olive oil and rosemary",
  price: 6,
  photoName: "Pizzas/focaccia.jpg",
  soldOut: false,
},
{ name: "focaccia",
ingredients: "bread with italian olive oil and rosemary",
price: 6,
photoName: "Pizzas/focaccia.jpg",
soldOut: false,
},
{ name: "Pizza Margherita",
ingredients: "Tomato and mozarella",
price: 6,
photoName: "Pizzas/margherita.jpg",
soldOut: false,
},
{ name: "Pizza Spinacci",
ingredients: "Tomato, Mozarella, spinach and ricetta cheese ",
price: 6,
photoName: "Pizzas/spinaci.jpg",
soldOut: true,
},
{ name: "focaccia",
ingredients: "bread with italian olive oil and rosemary",
price: 6,
photoName: "Pizzas/focaccia.jpg",
soldOut: false,
},
{ name: "focaccia",
ingredients: "bread with italian olive oil and rosemary",
price: 6,
photoName: "Pizzas/focaccia.jpg",
soldOut: false,
},
{ name: "Pizza Margherita",
ingredients: "Tomato and mozarella",
price: 6,
photoName: "Pizzas/margherita.jpg",
soldOut: false,
},
{ name: "Pizza Spinacci",
ingredients: "Tomato, Mozarella, spinach and ricetta cheese ",
price: 6,
photoName: "Pizzas/spinaci.jpg",
soldOut: true,
},
];

function App(){
  return (
    <div>
      <Header />
      <Menu/>
      <Footer/>
    </div>
  );
}

function Header(){
  const style ={};
  return(
  <header className='header'>
   <h1 style={style}>Pizza product</h1>
  </header>
  );
}

function Menu(){
  return(
    <div>
    <h2>our menu</h2>
      <Pizza 
      name = "Pizza spinach"
      ingredients = "Tomato, nozarella, spinach and ricotta cheese"
      photoName = "Pizzas/spinach.jpeg"
      price = {60}
      />
      <Pizza 
      name = "focaccia"
      ingredients = "bread with italian olive oil and rosemary"
      price = {6}
      photoName = "Pizzas/focaccia.jpeg"
      />
    </div>
    )
  }

function Footer(){
  return <footer>{new Date().toLocaleDateString()} we're currently open</footer>
  //return React.createElement("footer",null,"we are currently open!")
}
function Pizza(props){
  return (
  <div className='pizza'>
    <img src = {props.photoName}></img>
    <div>
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}</span>
    </div>
  </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);