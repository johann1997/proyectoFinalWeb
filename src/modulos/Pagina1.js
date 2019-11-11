import React, {Component} from 'react';
import Buscar from './modulos/Buscar';
import Menu from './modulos/Menu';
import Niveles from './modulos/Niveles';
import MinEducacion from './modulos/MinEducacion';
import Minecraft from './modulos/Minecraft';
import PieDePagina from './modulos/PieDePagina';


class PieDePaginaP1 extends Component {
    render()
    {
        return(
            <div className = "Global">
            <div className = "BuscarP1">
                <Buscar />
            </div>
            <div className = "MenuP1">
                <Menu />
            </div>
            <div className = "NivelesP1">
                <Niveles />
            </div>
            <div className = "MinEducacionP1">
                <MinEducacion />
            </div>
            <div className = "MinecraftP1">
                <Minecraft />
            </div>
            <div className = "PieDePaginaP1">
                <PieDePagina />
            </div>
            </div>
        );
    }
    }
    export default PieDePaginaP1;


