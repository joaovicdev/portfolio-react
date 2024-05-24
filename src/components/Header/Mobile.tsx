import React from 'react';
import flagBrazil from '../../assets/images/flag_brazil.png';
import logo from '../../assets/images/joaovictor.png';
import './header.scss';

export const Mobile: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="João Víctor" />

      <a href="#"><img src={flagBrazil} alt="Brazil flag" /></a>
    </header>
  );
};
