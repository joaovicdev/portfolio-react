import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import sitesImage from '../../assets/images/sites.svg';
import systemImage from '../../assets/images/systems.svg';
import designImage from '../../assets/images/design.svg';

import 'swiper/css';
import 'swiper/css/bundle';
import './services.scss';

export const Mobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services">
      <h1>{t('services.title')}</h1>
      <Swiper
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

        slidesPerView={1.5}
        spaceBetween={20}
        className="cards"
      >
        <SwiperSlide className="card">
          <img src={sitesImage} alt="Sites" />
          <div className="texts">
            <h1>{t('services.card1.title')}</h1>
            <p>{t('services.card1.description')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={systemImage} alt="Sistemas" />
          <div className="texts">
            <h1>{t('services.card2.title')}</h1>
            <p>{t('services.card2.description')}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={designImage} alt="Design" />
          <div className="texts">
            <h1>{t('services.card3.title')}</h1>
            <p>{t('services.card3.description')}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};