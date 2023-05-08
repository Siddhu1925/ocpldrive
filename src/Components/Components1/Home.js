import React from 'react'
import './Home.css'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
// import globe1 from '../../assets/globe1.png';
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className='home-con' id='home'>
        <div className='title'>
        <h1 >
        Cresco <span style={{color:'#FFFF00'}}> Together!</span>
        </h1>
        <p>Web 3.0 Unlocked: Embrace the Power of Digital Opulence.</p>
        {/* <img src={globe1} style={{height: '200px', width: '200px', marginLeft: '30%'}}/> */}

        </div>
        <motion.div className='key-con' 
           initial={{ y: -10 }}
           animate={{ y: 10 }}
           transition={{
             type: "smooth",
             repeatType: "mirror",
             duration: 2,
             repeat: Infinity,
           }}
        >
            <ExpandMoreRoundedIcon className='key'/>
        </motion.div>
    </div>
  )
}

export default Home