import React from 'react';
import { projectDatabase } from './projects';
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

      <div className="card">
        <h1>{projectDatabase[currentProjectIndex].title}</h1>
        <p>{projectDatabase[currentProjectIndex].description}</p>

        <img src={require(`../../assets/images/projects/${projectDatabase[currentProjectIndex].image}`)} />
      </div>
    </section>
  );
};
