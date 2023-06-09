import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import ReplayIcon from '@mui/icons-material/Replay';
import './Account.css'

const Account = (props) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className='account'>
      
      <h1 className='title-acc'>Account</h1>
      <h2 className='name-con'>Name:<span>{`${props.name}` }</span></h2>
     <p style={{color:"white"}}>Reload to get your name</p>
     <button className='reload' onClick={handleReload}><ReplayIcon/></button>
      <h2 className='name-con'>Thanks for Registering </h2>
      <h5 className='name-con'>now you can go back to your home page</h5>
      
      <div className='btns-bot'>
      <button className='home-btn'><a href='/' style={{textDecoration:"none"}}><HouseIcon/></a></button>
      </div>
      
    </div>
  );
}

export default Account;
