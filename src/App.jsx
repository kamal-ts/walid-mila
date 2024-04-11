// import { useState } from 'react'
import BgImage from './assets/12557301_5014255.jpeg';


// import MusicSound from "./assets/Sezairi-It'sYou.mp3";

// import { useState, useEffect } from 'react';

// import viteLogo from '/vite.svg'
// import './Anim.css'
import Navbar from './components/navbar';

import Home from './pages/home';
import Prayer from './pages/prayer';
import Couple from './pages/couple';
import Date from './pages/date';
import Wish from './pages/wish';
import Lish from './pages/lish'

// import Music from './components/music';
import Modal from './components/modal';
import LeafAnimation from './components/animationFall';
// import SnowFall from './components/snowFall';
// import LeafFall from './components/leafFalling'
import Gap from './components/gap'
import Modal2 from './components/modal2'
import { useState } from 'react';


function App() {
  // const [count, setCount] = useState(0)

 
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-cover bg-fixed text-white ' style={{ backgroundImage: `url(${BgImage})` }}>
        <div className='bg-sky-200 bg-opacity-65 relative font-lora'>
          
          <div className='container max-w-xl mx-auto h-auto pb-20 outline shadow-lg shadow-slate-950 bg-white transition-all'>
          {/* <div className='absolute bg-sky-900 top-[-6rem] right-[11rem] h-[20rem] w-[20rem] rounded-full blur-[10rem] sm:w-[68rem]'></div> */}
            <LeafAnimation></LeafAnimation>
              <Modal />
              {/* <SnowFall></SnowFall> */}
            {/* <LeafFall></LeafFall> */}
            <Navbar></Navbar>
            <Home></Home>
            <Prayer></Prayer>
            <Gap></Gap>
            <Couple></Couple>
            <Gap></Gap>
            <Date></Date>
            <Gap></Gap>
            <Lish toggleModal={toggleModal}></Lish>
            <Gap></Gap>
            <Wish></Wish>
            <Modal2 isOpen={isOpen} onClose={toggleModal} ></Modal2>
            {/* <Music audioSrc={MusicSound} type={2}></Music> */}



          </div>
        </div>


      </div>
    </>
  );
}

export default App
