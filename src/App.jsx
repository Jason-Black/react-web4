import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import sunImage from './assets/waves.webp'; // Import the image
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Navbar4 from './components/Navbar4';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      {/* <Navbar3 /> */}
      <Navbar4 />
      <div className=' max-auto pt-20 px-6'>
   {/* <Hero2 /> */}
   {/* <Hero3 /> */}
   {/* <Hero4 /> */}
   {/* <Hero5 /> */}
   <Hero6 />
      </div>
    </div>
  
  );
}

export default App;