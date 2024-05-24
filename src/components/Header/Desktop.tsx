import React from 'react';
import flagBrazil from '../../assets/images/flag_brazil.png';
import logo from '../../assets/images/joaovictor.png';
import './header.scss';

export const Desktop: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="João Víctor" />

      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#"><img src={flagBrazil} alt="Brazil flag" /></a></li>
        </ul>
      </nav>
    </header>
  );
};
