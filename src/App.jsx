import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl max-auto pt-20 px-6'>
      <Hero />
      </div>
    </div>
  
  );
}

export default App;