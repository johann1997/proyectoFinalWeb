import React, {Component} from 'react';
import ImgEdu from './images/banner-educacion.jpg';
import './css/MinEducacion.css';

class MinEducacion extends Component {
    render()
        {
            return(
                <div className = "Imagen">
                      <img src= {ImgEdu} className ="imgEdu"></img>
                    <div className = "Boton">
                        <button>Ver más</button>
                    </div>
                </div>
            );
        }
    }
    export default MinEducacion;