import React from 'react';
import { t } from 'i18next';
import aboutImage from '../../assets/images/about.png';
import './about.scss';

export const Desktop: React.FC = () => {
  return (
    <section id="about">
      <img src={aboutImage} />

      <div className="texts">
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
      </div>
    </section>
  );
};
