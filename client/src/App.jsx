import React from 'react';
import Bulletin from './components/Bulletin';
import Footer from './components/Footer';
import JuiceLab from './components/JuiceLab';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';


const App = () => {
  return (
    <main>
      <Checkout/>
    <Bulletin/>
    <Navbar/>
    <JuiceLab/>
    <Footer/>
    </main>
  );
};

export default App;