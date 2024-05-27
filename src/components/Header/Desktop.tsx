import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import brazilFlag from '../../assets/images/flag_brazil.png';
import usaFlag from '../../assets/images/flag_usa.png';
import logo from '../../assets/images/joaovictor.png';
import './header.scss';

export const Desktop: React.FC = () => {
  const { language, handleLanguageChange } = useLanguage();

  const handleClick = () => {
    if (language === 'pt') {
      handleLanguageChange('en');
    } else {
      handleLanguageChange('pt');
    }
  };

  return (
    <header>
      <img src={logo} alt="João Víctor" />

      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#" onClick={handleClick}><img src={language === 'pt' ? usaFlag : brazilFlag} alt="Flags" /></a></li>
        </ul>
      </nav>
    </header>
  );
};
