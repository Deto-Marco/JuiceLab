import React from 'react';
import Bulletin from './components/Bulletin';
import Footer from './components/Footer';
import JuiceLab from './components/JuiceLab';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
    <Bulletin/>
    <Navbar/>
    <JuiceLab/>
    <Footer/>
    </main>
  );
};

export default App;