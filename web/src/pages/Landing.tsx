import React from 'react';
// importando o estilo da pagina landing
import '../styles/pages/landing.css';
//importando imagens (./ no mesmo diretorio e ../ caso nao esteja no mesmo diretorio)
import logoImg from '../images/logo.svg'
//importando os icones
import { FiArrowRight } from 'react-icons/fi'
// para nao precisar recarregar a pagina completamente
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>

                <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                <strong>Atibaia</strong>
                <span>São Paulo</span>
                </div>

                <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="{rgba(0, 0, 0, 0.6)}"/>
                </Link>
            </div>
        </div>
    );
}

export default Landing;