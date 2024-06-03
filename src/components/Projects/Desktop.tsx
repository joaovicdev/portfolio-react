import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLanguage } from '../../contexts/LanguageContext';
import { projectDatabase } from './projects';

import 'swiper/css';
import 'swiper/css/bundle';
import './projects.scss';

export const Desktop: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="projects">
      <h1>{t('projects.title')}</h1>

      <div className="cards">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}

          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay
          speed={5000}
          loop
        >
          {projectDatabase.map((project: projectDatabase, _: number) => (
            <SwiperSlide key={`swiper-${_}`} className="card" onClick={() => {
              if (project[language].link) {
                window.open(project[language].link, '_blank');
              }
            }}>
              <img src={require(`../../assets/images/projects/${project[language].image}`)} />
              <h1>{project[language].title}</h1>
              <p>{project[language].description}</p>
            </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </section>
  );
};
