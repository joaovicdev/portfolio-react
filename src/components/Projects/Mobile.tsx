import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectDatabase } from './projects';
import 'swiper/css';
import './projects.scss';

export const Mobile: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

  const prevProjectHandle = () => {
    const newIndex = currentProjectIndex - 1;
    if(projectDatabase.hasOwnProperty(newIndex)) {
      setCurrentProjectIndex(newIndex);
    }
  };

  const nextProjectHandle = () => {
    const newIndex = currentProjectIndex + 1;
    if(projectDatabase.hasOwnProperty(newIndex)) {
      setCurrentProjectIndex(newIndex);
    }
  };

  return (
    <section id="projects">
      <h1>Projetos que já desenvolvi</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {projectDatabase.map((project: projectDatabase, _: number) => (
          <SwiperSlide key={`swiper-${_}`} className="card">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={require(`../../assets/images/projects/${project.image}`)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="counter-swiper">
        {Object(projectDatabase).map((project: projectDatabase, _: number) => {
          return (
            <div key={`swiper-${_}`} className={`grey ${_ === currentProjectIndex ? 'active' : ''}`}></div>
          );
        })}
      </div>
    </section>
  );
};
