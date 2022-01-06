import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reaact from "./react"
import Titlle from "./Titlle"
import Acordion from './Acordion';

function App() {
  return (
    <div className = "all">
        {/* <Reaact value = {3} />
        <Titlle title = {'sisi'}/>
        <Reaact value = {5} /> */}
        <Acordion title = 'fdgfdfdf' collabsed = {true} />
        {/* <Titlle title = {'efeffefe'}/>
        <Titlle title = {'grgrgrgrg'}/>
        <Titlle title = {'w0ooooooooooooooooo'}/> */}
        <Acordion title = {'We fdgfdfdf'} collabsed = {false} />
    </div>
  );
}

export default App;
