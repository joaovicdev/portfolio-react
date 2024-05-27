import React from 'react';
import { t } from 'i18next';
import aboutImage from '../../assets/images/about_mobile.png';
import './about.scss';

export const Mobile: React.FC = () => {
  return (
    <section id="about">
      <h1>{t('about.title')}</h1>
      <img src={aboutImage} />
      <p>{t('about.description')}</p>
    </section>
  );
};
