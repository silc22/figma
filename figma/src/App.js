import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  return (
    <div className="container">
        <div className='navbar'> 
          <div className='brand'>
              <p className='brand-tittle'>more</p>
          </div>
          <div className="navbar-conteiner">
            <div className='navbar-search'>
              <SearchIcon/>
              <input placeholder='Cerca in tutto il catalogo o sfoglia tra le categorie' className='buscador'>
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
              <div className='icon'>
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
                
              </div>
            </div>
          </div>
        </div>
      <div className='main'>
        <div className='tittle-conteiner'>
          <h1>
            Bentornato <span>Rino</span>, ricomincia subito
          </h1>
          <div className='dropdown'>
              <KeyboardArrowDownIcon/>
          </div>
        </div>
        <div className='content'>
          <div className='content-text'>
          <p >I miei ultimi Progetti</p>
          <div className='arrow-conteiner'>
            <ArrowBackIcon/>
            <ArrowForwardIcon/>
          </div>
          </div>
          <div className='project-content'>
            <div className='newproject'>
              <AddBoxIcon/>
              <p>Nuovo progetto</p>
            </div>
            <div className='project'>
              <div className='card-text'>
                  <p className='text-tittle'>
                        Mirabelli Loft a Milano 
                  </p>
                  <p className='card-subtittle'>
                        Da chiudere entro il 17 set 2021
                  </p>
                </div>
                <div className='card-button'>
                    <p className='name'>
                        Jhon Mirabelli 
                    </p>
                    <p className='vip'>
                          vip
                    </p>
                    <p  className='tag'>
                        tag
                    </p>
                </div>
            </div>
            <div className='project'>
              <div className='card-text'>
                <p className='text-tittle'>
                      Mirabelli Loft a Milano 
                </p>
                <p className='card-subtittle'>
                      Da chiudere entro il 17 set 2021
                </p>
              </div>
              <div className='card-button'>
                  <p className='name'>
                      Jhon Mirabelli 
                  </p>
                  <p className='vip'>
                        vip
                  </p>
                  <p  className='tag'>
                      tag
                  </p>
              </div>
            </div>
            <div className='project'>
            <div className='card-text'>
                  <p className='text-tittle'>
                        Mirabelli Loft a Milano 
                  </p>
                  <p className='card-subtittle'>
                        Da chiudere entro il 17 set 2021
                  </p>
                </div>
                <div className='card-button'>
                    <p className='name'>
                        Ivy Levan 
                    </p>
                    <p className='vip'>
                          vip
                    </p>
                    <p  className='tag'>
                        tag
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
