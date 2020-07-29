import React from "react";
import LogoMain from '../../assets/img/LogoMain.png'; 
import './Menu.css';
import Button from '../Button'
//import ButtonLink from "./components/ButtonLink";

function Menu(){
    return(
        <nav className="Menu">
            <a href='/'>
                {/*AQUI ESTA CARREGANDO O LOGOTIPO NO TOPO DA PAGINA */}
              <img className="LogoMain" src={LogoMain} alt="Teckflix LogoMain" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                novo video
            </Button>
        </nav>
    );
}

export default Menu;