import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = ['Barcelonas,es','Santiago,cl'];

function App() {
  
  return (
    <div className="App">
     <LocationList cities = {cities}/>
         </div>
  );
}

export default App;
