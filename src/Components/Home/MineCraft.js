import React, {Component} from 'react';
import './css/MineCraft.css';
import Craft from './images/publicidad-juego.jpg';

class MineCraft extends Component {
    render()
    {
        return(
            
            <div className = "Minecraft">
            <div className= "TextoCraft">
             <div className= "Titulo">
                 STEAM
             </div>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <div className= "Escrito">
                 lbalbablablablablablablb
                 balbalbalbalblab
                 bablbalblablalbal
                 blablablblablbalbalbalblab

             </div>
             </div>
             <div className="Craft">
             <img src= {Craft} className ="imgcraft"></img>
            </div>
            </div>
   
      
        );
    }
}
export default MineCraft;