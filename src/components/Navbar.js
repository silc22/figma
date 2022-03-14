import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import userPicture from "../assets/Ellipse-1.png"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

function Navbar(){

    return(
        <div className='navbar-principal'> 
          <div className='brand'>
              <p className='brand-tittle'>more</p>
          </div>
          <div className="navbar-conteiner">
            <div className='navbar-search'>
              <SearchIcon/>
              <input placeholder='Cerca in tutto il catalogo o sfoglia tra le categorie' className='searcher'>
              </input>
            </div>
            <div className='navbar-icons'>
              <div className='icon'>
                <SpeedIcon/>
              </div>
              <div className='progetti-icon'>
                <StickyNote2Icon/>
                <p>Progetti</p>
              </div>
              <div className='icon' title='Boards'>
              <WidgetsIcon/>
              </div>
              <div className='icon'>
                <ConfirmationNumberIcon/>
              </div>
              <div className='icon'>
                <PriceChangeIcon/>
              </div>
              <div className='icon'>
                <NotificationsActiveIcon/>
              </div>
              <div className='user-image'>
                <img src={userPicture} alt="user profile"></img>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Navbar