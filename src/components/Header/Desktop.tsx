import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { whatsapp } from '../../constants/whatsapp_link';

import brazilFlag from '../../assets/images/flag_brazil.png';
import usaFlag from '../../assets/images/flag_usa.png';
import logo from '../../assets/images/joaovictor.png';
import './header.scss';

export const Desktop: React.FC = () => {
  const { language, handleLanguageChange } = useLanguage();
  const { t } = useTranslation();

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
          <li><a href="#about">{t('header.about')}</a></li>
          <li><a href="#services">{t('header.services')}</a></li>
          <li><a href="#projects">{t('header.projects')}</a></li>
          <li><a href={whatsapp} target="_blank">{t('header.contact')}</a></li>
          <li><a href="#" onClick={handleClick}><img src={language === 'pt' ? usaFlag : brazilFlag} alt="Flags" /></a></li>
        </ul>
      </nav>
    </header>
  );
};
