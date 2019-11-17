import React, {Component} from 'react';
import ImgEdu from './images/banner-educacion.jpg';
import './css/MinEducacion.css';

class MinEducacion extends Component {
    render()
    {
        return(
            <div className = "content-education-banner">
                <img src= {ImgEdu} className ="imgEdu"></img>
                <button>Ver más</button>
            </div>
        );
    }
}
export default MinEducacion;