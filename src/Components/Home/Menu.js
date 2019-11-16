import React, {Component} from 'react';
import './css/Menu.css';


class Menu extends Component {
render()
{
    return(
        <div className = "Menu">
            <div className = "AcercaDe">
                Acerca de
            </div>
            <div className = "Nosotros">
                Nosotros
            </div>
            <div className = "Videos">
                Videos
            </div>
            <div className = "Comunidad">
                Comunidad
            </div>
 
        </div>
    );
}
}
export default Menu;