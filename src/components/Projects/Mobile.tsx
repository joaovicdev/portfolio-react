import React from 'react';
import { t } from 'i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { projectDatabase } from './projects';

import 'swiper/css';
import 'swiper/css/bundle';
import './projects.scss';

export const Mobile: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="projects">
      <h1>{t('projects.title')}</h1>

      <Swiper
        speed={5000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

        slidesPerView={1}
        spaceBetween={20}
      >
        {projectDatabase.map((project: projectDatabase, _: number) => (
          <SwiperSlide key={`swiper-${_}`} className="card" onClick={() => {
            if (project[language].link) {
              window.open(project[language].link, '_blank');
            }
          }}>
            <h1>{project[language].title}</h1>
            <p>{project[language].description}</p>
            <img src={require(`../../assets/images/projects/${project[language].image}`)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
