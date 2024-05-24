import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectDatabase } from './projects';
import 'swiper/css';
import './projects.scss';

export const Mobile: React.FC = () => {
  return (
    <section id="projects">
      <h1>Projetos que já desenvolvi</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 2000, reverseDirection: true }}
        onSlideChange={() => console.log('slide change')}
      >
        {projectDatabase.map((project: projectDatabase, _: number) => (
          <SwiperSlide key={`swiper-${_}`} className="card" onClick={() => {
            if (project.link) {
              window.open(project.link, '_blank');
            }
          }}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={require(`../../assets/images/projects/${project.image}`)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
