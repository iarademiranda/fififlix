import React from 'react'
import ButtonLink from './components/ButtonLink'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';


function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo do fififlix"/>
            </a>
        
            <Button  className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );

}
export default Menu;