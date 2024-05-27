import React from 'react';
import { t } from 'i18next';
import logo from '../../assets/images/joaovictor.png';
import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <h1>{t('footer.disclaimer')}</h1>
      <img src={logo} />
    </footer>
  );
};
