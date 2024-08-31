import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

// this is how you add a space in span text
// Also a cool CSS Only button. that animates and has a 'focus' ring + wait cursor.

const Hero  = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl text-center tracking-wide'>
            VirtualR build tools
    
            <span className='bg-gradient-to-r from-orange-500 to-sky-500 text-transparent bg-clip-text'>{" "}for developers </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam totam repellat facilis minus distinctio debitis. At, deleniti nemo, fugit expedita aspernatur quidem qui corrupti, amet minima quod possimus eius?</p>
    <div className='flex justify-center my-10'>
    <a href='#' className='hover:cursor-wait transform transition-transform focus:ring-2 focus:ring-red-500 duration-300 hover:scale-110 active:scale-95 bg-gradient-to-r from-orange-500 to-sky-500 active:from-teal-500 active:to-blue-500 py-3 px-4 mx-3 rounded-md'>
  Start for Free
</a>





    </div>
    
    
    </div>
  );
};

export default Hero