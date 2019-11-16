import React, {Component} from 'react';
import './css/PieDePagina.css';
import Icono1 from './images/whatsapp_logo.png';
import Icono2 from './images/instagram_logo.png';
import Icono3 from './images/facebook_logo.png';


class PieDePagina extends Component {
    render()
    {
        return(
            <div className = "PieDePagina">
                <div className = "Texto">
               .© 2019 STEAM Developers. All rights reserved.
                </div>
                <div className = "contactos">
                <div className = "Instagram">
                <img src= {Icono1} className ="icono1"></img>
                </div>
                <div className = "Whatssap">
                <img src= {Icono2} className ="icono2"></img>
                </div>
                <div className = "Facebook">
                <img src= {Icono3} className ="icono3"></img>
                </div>
                </div>
     
            </div>
        );
    }
    }
    export default PieDePagina;