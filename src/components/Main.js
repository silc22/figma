import React, {useState} from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Carousel from './Carousel';

function Main(){
    
    const [handler, setHandler] = useState(false)

    function dropdown(){
      setHandler(!handler)
    }

    return(
        <div className='main'>
            <div className='tittle-conteiner'>
            <div className='tittle-conteiner-children'>
                <h1>
                Bentornato <span>Rino</span>, ricomincia subito
                </h1>
                <div className="dropdown" onClick={()=>dropdown()}>
                    <KeyboardArrowDownIcon/>
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
            </div>
            <Carousel/>
        </div>
    )
}

export default Main