import React, {Component} from 'react';
import './css/Menu.css';


class Menu extends Component {
render()
{
    return(
        <div className = "Menu">
            <div className = "items-home">
                Acerca de
            </div>
            <div className = "items-home">
                Nosotros
            </div>
            <div className = "items-home">
                Videos
            </div>
            <div className = "items-home">
                Comunidad
            </div>
 
        </div>
    );
}
}
export default Menu;