import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projectDatabase } from './projects';
import 'swiper/css';
import './projects.scss';

export const Mobile: React.FC = () => {
  return (
    <section id="projects">
      <h1>Projetos que já desenvolvi</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {projectDatabase.map((project: projectDatabase, _: number) => (
          <SwiperSlide key={`swiper-${_}`} className="card">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={require(`../../assets/images/projects/${project.image}`)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
