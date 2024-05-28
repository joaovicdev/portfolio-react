import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../../assets/images/about_mobile.png';
import './about.scss';

export const Mobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h1>{t('about.title')}</h1>
      <img src={aboutImage} />
      <p>{t('about.description')}</p>
    </section>
  );
};
