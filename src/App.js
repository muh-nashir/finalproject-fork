import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar/navbar'
import Slider from './Components/Slider/slider'
import Categories from './Components/Categories/Categories'
import Card from './Components/Card/Card'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Categories />
      <Card />
    </div>
  );
}

export default App;
