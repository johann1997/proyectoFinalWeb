//Dependencies
import React, { Component } from 'react';

//Style
import '../Style/Login-style.css';

//Assets
import userimg from '../Images/avatar.png';
import passimg from '../Images/lock.png';

const Login = () => (
    <div className="content-login">
        <div className="information-login">
            <div>
            <form >
            <text className="Title2">INICIAR SESIÓN</text>
            <br></br>
            <br></br>
                <div class="input-container">
                    <img className="img-loginstyle" src={userimg}/>
                    <input class="input-field" type="text" placeholder="Usuario" name="usrnm"/>
                </div>
                
                <div class="input-container">
                    <img className="img-loginstyle" src={passimg}/>
                    <input class="input-field" type="password" placeholder="Contraseña" name="psw"/>
                </div>

                <button type="submit" class="btn"><b>INGRESAR</b></button>
            </form>
            </div>
        </div>                
    </div>
)

export default Login;