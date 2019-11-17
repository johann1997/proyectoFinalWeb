import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/Buscar.css';
import Logo from './images/steam.PNG';
import Lupaicon from './images/lupa.png';


class Buscar extends Component {
    render()
    {
        return(
            <div className = "BarraBuscar">
                <div className = "logo">
                    <img src= {Logo}></img>
                </div>
                <div className = "AreaBuscar">
                    <input type="text" className="AreaBuscarText"></input>
                </div>
                <div className = "Lupa">
                <img src= {Lupaicon}></img>
                </div>
                <div className = "Docente">
                    <Link to='/Login'><text className="Title">INGRESAR</text></Link>
                </div>     
            </div>
        );
    }
}
export default Buscar;

