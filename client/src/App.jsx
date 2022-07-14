import React from 'react';
import Bulletin from './components/Bulletin';
import Footer from './components/Footer';
import JuiceLab from './components/JuiceLab';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <main>
      <ShoppingCart/>
    <Bulletin/>
    <Navbar/>
    <JuiceLab/>
    <Footer/>
    </main>
  );
};

export default App;