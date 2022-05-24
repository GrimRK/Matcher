import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountBoxIcon fontSize='large' className='icon_header'/>
      </IconButton>
      <img
      className='img-header'
      src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
      alt="logo"
      ></img>
      <IconButton>
        <ForumIcon fontSize='large' className='icon_header'/>
      </IconButton>
      
    </div>
  )
}

export default Header