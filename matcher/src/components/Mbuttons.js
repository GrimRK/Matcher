import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import BoltIcon from '@mui/icons-material/Bolt';
import Mcard from './Mcard';
function refreshPage(){ 
    window.location.reload(); 
}

const swiped = (direction,name2Delete)=>{
    console.log("removing :"+ name2Delete);
};
const outOfFrame=(pname)=>{
    console.log(pname+" left!");
};

function Mbuttons() {
  return (
      <div className='mbuttons'>
          
        <IconButton onClick={refreshPage}>
            <ReplayIcon className='mbuttons_repeat' fontSize='large'  />
            
        </IconButton>
        <IconButton >
            <CloseIcon className='mbuttons_left' fontSize='large'/>
        </IconButton>
        <IconButton>
            <StarIcon className='mbuttons_star' fontSize='large'/>
        </IconButton>
        <IconButton>
            <FavoriteIcon className='mbuttons_right' fontSize='large'/>
        </IconButton>
        <IconButton>
            <BoltIcon className='mbuttons_flash' fontSize='large'/>
        </IconButton>
        
        
    
      </div>
    

  )
}

export default Mbuttons;