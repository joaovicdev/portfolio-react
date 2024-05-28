import React from 'react';
import { useTranslation } from 'react-i18next';
import sitesImage from '../../assets/images/sites.svg';
import systemImage from '../../assets/images/systems.svg';
import designImage from '../../assets/images/design.svg';
import './services.scss';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services">
      <h1>{t('services.title')}</h1>
      <div className="cards">
        <div className="card">
          <img src={sitesImage} alt="Sites" />
          <div className="texts">
            <h1>{t('services.card1.title')}</h1>
            <p>{t('services.card1.description')}</p>
          </div>
        </div>
        <div className="card hidden">
          <img src={systemImage} alt="Sistemas" />
          <div className="texts">
            <h1>{t('services.card2.title')}</h1>
            <p>{t('services.card2.description')}</p>
          </div>
        </div>
        <div className="card hidden">
          <img src={designImage} alt="Design" />
          <div className="texts">
            <h1>{t('services.card3.title')}</h1>
            <p>{t('services.card3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};