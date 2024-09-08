import React from 'react';
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from "react-icons/fa";
import Statistics from './components/Statistics';
import Aboutus from './components/About';
import Button from './components/Button';
import Chooseus from './components/Choose';
import Footer from './components/Footer';
import Updates from './components/Updates';
import Link from "next/link";

const Home = () => {
  return (
    <div className='w-screen'>
      <div className='relative h-screen w-screen font-light'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Background.mp4" type='video/mp4'/>
        </video>
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/0 z-10'>
          <div className='absolute z-10 h-screen bg-cover bg-center font-Sarabun'>
            <nav className='text-white flex flex-col sm:flex-row justify-around p-5 sm:p-10'>
              <div className='text-center sm:text-left'>
                <h3 className='font-medium text-lg sm:text-xl'>Ethicalmine</h3>
              </div>
              <div className='mt-4 sm:mt-0'>
                <ul className='flex flex-col sm:flex-row text-sm items-center sm:items-start'>
                  <li className='px-2 py-1'>Home</li>
                  <li className='px-2 py-1'>Solution</li>
                  <li className='px-2 py-1'>Blog</li>
                  <li className='px-2 py-1'>Contact Us</li>
                </ul>
              </div>
              <div className='mt-4 sm:mt-0'>
                <ul className='flex justify-center sm:justify-end'>
                  <li className='px-2 text-xl'><FaGithub /></li>
                  <li className='px-2 text-xl'><FaDiscord /></li>
                  <li className='px-2 text-xl'><FaReddit /></li>
                  <li className='px-2 text-xl'><FaTwitter /></li>
                </ul>
              </div>
            </nav>
            <section className='h-4/6'>
              <div className='flex flex-col justify-center items-center text-center h-full'>
                <div className='flex flex-col items-center w-4/5 sm:w-3/5'>
                  <h1 className='bg-gradient-to-r text-4xl sm:text-6xl font-bold bg-clip-text text-transparent mb-5'>
                    Revolutionizing the Mining Industry <span className='text-white'>with Blockchain</span>
                  </h1>
                  <p className='text-white w-full sm:w-4/6 tracking-widest text-sm font-light leading-6'>
                    Our technology ensures that every step of the mining supply chain is transparent, ethical, and sustainable.
                  </p>
                </div>
                <div className='flex flex-col sm:flex-row text-center mt-5'>
                  <Button><Link href="/Contact">Get Started</Link></Button>
                  <button className="py-3 px-10 my-3 sm:my-5 mx-1 text-black bg-gradient-tob2 rounded-md">Learn more</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Statistics />
      <Aboutus />
      <Chooseus />
      <Updates />
      <Footer />
    </div>
  );
};

export default Home;