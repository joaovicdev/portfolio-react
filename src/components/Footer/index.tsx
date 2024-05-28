import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/joaovictor.png';
import './footer.scss';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <h1>{t('footer.disclaimer')}</h1>
      <img src={logo} />
    </footer>
  );
};
