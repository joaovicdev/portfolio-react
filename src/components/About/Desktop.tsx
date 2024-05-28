import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../../assets/images/about.png';
import './about.scss';

export const Desktop: React.FC = () => {
  const { t } = useTranslation();

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
