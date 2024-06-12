import React, { useState,useEffect } from 'react';
import icons from '../assests/assets'; // Assuming correct path to your icons
import Image from 'next/image';
import Link from 'next/link';

const Home_Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    if(window.screenY>0)
    setIsScrolled(true); // Corrected the comparison here
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div className='h-screen bg-black'>
      <div className='flex h-5/6'>
        {/* Left sidebar */}
        <div className='h-full flex-none w-1/9 bg-black'>
          {/* Upper section */}
          <div className='h-1/3 m-1 rounded-md bg-neutral-900 p-5 flex flex-col justify-between'>
            <Image src={icons.spotify_Logo} alt="Spotify Logo" className='w-24 object-contain' />
            <div className='flex text-white space-x-3'>
              <Image src={icons.home_Logo} alt="Home Icon" className='size-5 mr-3' /> Home
            </div>
            <div className='flex text-white space-x-3'>
              <Image src={icons.search_Logo} alt="Search Icon" className='size-5 mr-3' /> Login
            </div>
          </div>
          {/* Lower section */}
          <div className='h-2/3 m-1 rounded-md bg-neutral-900'>
            <div className='h-1/2 p-5 flex flex-col justify-between'>
              <div className='flex text-white space-x-3'>
                <Image src={icons.library} alt="Library Icon" className='size-5 mr-3' /> Library
              </div>
              <div className='flex text-white space-x-3'>
                <Image src={icons.add_playlist} alt="Add Playlist Icon" className='size-5 mr-3' /> Create Playlist
              </div>
              <div className='flex text-white space-x-3'>
                <Image src={icons.heart} alt="Heart Icon" className='size-5 mr-3' /> Liked Songs
              </div>
            </div>
          </div>
        </div>
        {/* Right main content */}
        <div className='relative text-white flex-1 mt-1 rounded-md w-5/6 bg-neutral-900 scroll-m-0 overflow-auto no-scrollbar' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Header */}
          <div className={`sticky top-0 h-1/6 z-10 rounded-t-md flex items-center justify-center transition-colors duration-300  ${isScrolled ? 'bg-black' : 'bg-neutral-900'}`}>
            {/* Navigation links */}
            <div className='text-base absolute right-0 flex items-center space-x-7 mr-4 font-semibold text-gray-200/20'>
              <div className='hover:text-white hover:scale-105 duration-500'>Premium</div>
              <div className='hover:text-white hover:scale-105 duration-500'>Support</div>
              <div className='hover:text-white hover:scale-105 duration-500'>Download</div>
              <div>|</div>
              <div className='hover:text-white hover:scale-105 duration-500'>SignUp</div>
              <div className='hover:scale-110 duration-500 bg-white rounded-3xl text-black w-20 h-8 flex items-center justify-center font-bold'>
                <Link href='/Login'>Login</Link>
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className='p-4'>
            {/* Section titles */}
            <div className='text-2xl font-semibold'>Focus</div>
            <div className='w-full flex justify-between'>
              {[...Array(5)].map((_, index) => (
                <Card key={index} title="Peaceful Piano" desc="Relax and indulge with beautiful piano pieces and melodies" icon={icons.home_Logo} />
              ))}
            </div>
            <div className='text-2xl font-semibold'>Playlist</div>
            <div className='w-full flex justify-between'>
              {[...Array(5)].map((_, index) => (
                <Card key={index} title="Peaceful Piano" desc="Relax and indulge with beautiful piano pieces and melodies" icon={icons.home_Logo} />
              ))}
            </div>
            <div className='text-2xl font-semibold'>Song Of India</div>
            <div className='w-full flex justify-between'>
              {[...Array(5)].map((_, index) => (
                <Card key={index} title="Peaceful Piano" desc="Relax and indulge with beautiful piano pieces and melodies" icon={icons.home_Logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div className='h-1/6 black'>
        {/* Footer content */}
      </div>
    </div>
  );
}

// Card component for displaying individual cards
const Card = ({ title, desc, icon }) => {
  return (
    <div className='group rounded-md text-xs card hover:bg-black bg-opacity-30 w-1/6 p-4'>
      <div className='relative'>
        {/* Image for the card */}
        <img className='rounded-md w-full h-36 object-contain' src='https://plus.unsplash.com/premium_photo-1687890821482-886629c12df4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='dfg' />
        <Image src={icons.play_button} alt="Play button" className='w-10 absolute bottom-0 right-2 transform scale-0 translate-y-0 group-hover:scale-125 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 transition duration-300' />
      </div>
      {/* Card title and description */}
      <div className='text-white m-1 text-left'>{title}</div>
      <div className='text-gray-500 m-1'>{desc}</div>
    </div>
  );
}

export default Home_Page;
