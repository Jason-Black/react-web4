import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';


function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl max-auto pt-20 px-6'>
   {/* <Hero2 /> */}
   {/* <Hero3 /> */}
   <Hero4 />
      </div>
    </div>
  
  );
}

export default App;