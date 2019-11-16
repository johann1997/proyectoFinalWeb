import React, {Component} from 'react';
import Logo from './images/steam.PNG';
import './css/Buscar.css';
import Lupa2 from './images/lupa2.png';


class Buscar extends Component {
    render()
    {
        return(
            <div className = "BarraBuscar">
                <div className = "logo">
                    <img src= {Logo} className ="img"></img>
                </div>
                <div className = "AreaBuscar">
                    <textarea></textarea>
                </div>
                <div className = "Lupa">
                <img src= {Lupa2} className ="imgLupa2"></img>
                </div>
                <div className = "Docente">
                    <h1>DOCENTE</h1>
                </div>
     
            </div>
        );
    }
    }
    export default Buscar;

