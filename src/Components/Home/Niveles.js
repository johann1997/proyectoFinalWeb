import React, {Component} from 'react';
import ImgCard from './images/imagen-card.jpg';
import './css/Niveles.css';

class Niveles extends Component {
    render()
    {
        return(
            <div className = "Niveles">
                <div className = "card1">
                <div className = "Nivel1">
                <div className = "textLevel">
                    Nivel 1
                </div>
                <img src= {ImgCard} className ="imgCard"></img>
                </div>
                <div className= "textCard">
                hola prros
                <br></br>
                <h1>hola prros
                    lkgjjvjljlkrtjblkrj
                    skjcchkñmlkjhhhjnj
                    vkhkvhlklklñklñklk
                    jncjdacasljclsaclk
                </h1>
                </div>
                </div>
                <div className = "card2">
                <div className = "Nivel2">
                <div className = "textLevel">
                Nivel 1
                </div>
                <img src= {ImgCard} className ="imgCard"></img>
                </div>
                <div className= "textCard">
                 hola prros
                 <br></br>
                <h1>hola prros
                    lkgjjvjljlkrtjblkrj
                    skjcchkñmlkjhhhjnj
                    vkhkvhlklklñklñklk
                    jncjdacasljclsaclk
                </h1>
                </div>
                </div>
                <div className = "card3">
                <div className = "Nivel3">
                <div className = "textLevel">
                Nivel 1
                </div>
                <img src= {ImgCard} className ="imgCard"></img>
                </div>
                <div className= "textCard">
                hola prros
                <br></br>
                <h1>hola prros
                    lkgjjvjljlkrtjblkrj
                    skjcchkñmlkjhhhjnj
                    vkhkvhlklklñklñklk
                    jncjdacasljclsaclk
                </h1>
                </div>
                </div>
     
            </div>
        );
    }
    }
    export default Niveles;