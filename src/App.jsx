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
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import { Workflow } from 'lucide-react';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CursorDemo from './components/CursorDemo';
import CursorDemo2 from './components/CursorDemo2';
import Navbar5 from './components/Navbar5';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      {/* <Navbar3 /> */}
      {/* <Navbar4 /> */}
      <Navbar5 />
      <div className="max-w-7xl mx-auto pt-20 px-6">
   {/* <Hero2 /> */}
   {/* <Hero3 /> */}
   {/* <Hero4 /> */}
   {/* <Hero5 /> */}
   <Hero6 />
   <FeatureSection />
   <Workflow />
   <Pricing />
 <CursorDemo />
   <Testimonials />
   <CursorDemo2 />
   <Footer />
      </div>
    </div>
  
  );
}

export default App;