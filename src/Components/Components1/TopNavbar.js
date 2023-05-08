import React from 'react'
import logo1 from '../../assets/ocpllogo.webp'
import MenuDrawer from './TopbarDrawer';
import HouseIcon from '@mui/icons-material/House';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './Topnavbar.css'
function TopNavbar() {
  return (
    <div className='topnavbar'>
        <div>
            <a href='/Home'><img src={logo1} alt="logo" /></a>
        </div>
        <div className='menu'><MenuDrawer/></div>
        <div className='hyper-links'>
        <a href="/">
            <p className="link"><HouseIcon style={{ color: "deeppink" }}/>Home</p>
          </a>
          <a href="/register">
            <p className="link"><AppRegistrationIcon/>Register</p>
          </a>
          <a href="/login">
            <p className="link"><LoginIcon/>Login</p>
            </a>
            <a href="/account">
            <p className="link" ><AccountBoxIcon/>Account</p>
            </a>

 

        </div>
    </div>
  )
}

export default TopNavbar