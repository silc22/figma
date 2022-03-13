import React, {useState} from 'react';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import userPicture from "../src/assets/Ellipse 1.png"
import Carousel from './components/Carousel';

function App() {


  const [handler, setHandler] = useState(false)

  function dropdown(){
    setHandler(!handler)
  }
  return (
    <div className="container-principal">
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
                <img src={userPicture}></img>
              </div>
            </div>
          </div>
        </div>
      <div className='main'>
        <div className='tittle-conteiner'>
          <div className='tittle-conteiner-children'>
            <h1>
              Bentornato <span>Rino</span>, ricomincia subito
            </h1>
              <div className="dropdown" onClick={()=>dropdown()}>
                  <KeyboardArrowDownIcon/>
              </div>
              <div className={handler ? 'dropdown-open': "dropdown-close"}>
                <ul className='dropdown-items-text'>
                  <li className='items-tittle'>
                  Partendo dalle boards, sviluppa preventivi e gestisci gli ordini, con:
                  </li>
                  <li className='items'>
                  <StickyNote2Icon/> Un nuovo progetto
                  </li>
                  <hr/>
                  <li className='items-tittle'>
                  Oppure, creando in modalià singola:
                  </li>
                  <li className='items'>
                  <WidgetsIcon/> Una nuova board
                  </li>
                  <li className='items'>
                  <ConfirmationNumberIcon/> Un nuovo preventivo
                  </li>
                 
                </ul>
              </div>
            </div>
        </div>
        <Carousel/>
        </div>
      </div>
  );
}

export default App;
