import React from 'react';
import logo from '../../assets/images/joaovictor.png';
import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <h1>JV MIDIA NEGOCIOS DIGITAIS LTDA - 41.557.171/0001-01</h1>
      <img src={logo} />
    </footer>
  );
};
