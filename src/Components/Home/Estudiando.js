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
                       <text><b>STEAM</b></text> 
                    </div>
                    <br></br>
                    <div className= "Escrito">
                        <p>No te quedes atrás, aventúrate
                        al nuevo mundo de X y sus
                        compañeros, gana puntos,
                        desactiva misiones y aprende.
                        </p>
                        <br></br>
                        <button className="buttonE">DESCARGAR</button>
                    </div>
                </div>
                <img src= {Estudiandoimg} className ="imgEstudiar"></img>
                

            </div>           
        );
    }
}
export default Estudiar;

