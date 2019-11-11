import React, { Component } from 'react';
import Buscar from '../Components/Home/Buscar';
import Menu from '../Components/Home/Menu';
import Niveles from '../Components/Home/Niveles';
import MinEducacion from '../Components/Home/MinEducacion';
import Minecraft from '../Components/Home/MineCraft';
import PieDePagina from '../Components/Home/PieDePagina';

class Home extends Component {
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

export default Home;