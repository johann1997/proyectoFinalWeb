import React, {Component} from 'react';
import Estudiandoimg from './images/banner_estudiante.jpg';
import './css/Estudiando.css';



class Estudiar extends Component {
    render()
    {
        return(
          
                <div className = "Estudiante">
                    <div className= "TextoEstudio">
             <div className= "Titulo">
                 STEAM
             </div>
             <br></br>
             <br></br>
      
             <div className= "Escrito">
                 lbalbablablablablablablb
                 balbalbalbalblab
                 bablbalblablalbal
                 blablablblablbalbalbalblab

             </div>
             </div>
                    
                    <img src= {Estudiandoimg} className ="imgEstudiar"></img>
                    <div className = "Boton">
                        <button className="buttonE">DESCARGAR</button>
                    </div>
                </div>
               
           
        );
    }
    }
    export default Estudiar;

