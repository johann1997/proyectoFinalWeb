import React, {Component} from 'react';
import ImgCard from './images/imagen-card.jpg';
import './css/Niveles.css';

class Niveles extends Component {
    render()
    {
        return(
            <div className = "Niveles">
                <div className = "card-home">
                    <div className = "Nivel1">
                        <div className = "textLevel">
                            <text>Nivel 1</text>
                        </div>
                        <img src= {ImgCard} className ="imgCard"></img>
                    </div>
                    <div className= "textCard">
                        <text><b>Comentarios:</b></text>
                        <br></br>
                        <p>El primer nivel del juego me gustó 
                            tiene algo mágico, entretenido y 
                            he aprendido mucho. Muero por jugar 
                            los otros niveles.                            
                        </p>
                    </div>
                </div>

                <div className = "card-home">
                    <div className = "Nivel1">
                        <div className = "textLevel">
                            <text>Nivel 1</text>
                        </div>
                        <img src= {ImgCard} className ="imgCard"></img>
                    </div>
                    <div className= "textCard">
                        <text><b>Comentarios:</b></text>
                        <br></br>
                        <p>El primer nivel del juego me gustó 
                            tiene algo mágico, entretenido y 
                            he aprendido mucho. Muero por jugar 
                            los otros niveles.                            
                        </p>
                    </div>
                </div>

                <div className = "card-home">
                    <div className = "Nivel1">
                        <div className = "textLevel">
                            <text>Nivel 1</text>
                        </div>
                        <img src= {ImgCard} className ="imgCard"></img>
                    </div>
                    <div className= "textCard">
                        <text><b>Comentarios:</b></text>
                        <br></br>
                        <p>El primer nivel del juego me gustó 
                            tiene algo mágico, entretenido y 
                            he aprendido mucho. Muero por jugar 
                            los otros niveles.                            
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Niveles;