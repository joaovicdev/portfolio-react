import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { projectDatabase } from './projects';
import './projects.scss';

export const Desktop: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);
  const [disabledPrevBtn, setDisabledPrevBtn] = React.useState(true);
  const [disabledNextBtn, setDisabledNextBtn] = React.useState(false);

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

  useEffect(() => {
    const indexNextVerify = currentProjectIndex + 1;
    const indexPrevVerify = currentProjectIndex - 1;

    if (projectDatabase.hasOwnProperty(indexNextVerify)) {
      setDisabledNextBtn(false);
    } else {
      setDisabledNextBtn(true);
    }

    if(projectDatabase.hasOwnProperty(indexPrevVerify)) {
      setDisabledPrevBtn(false);
    } else {
      setDisabledPrevBtn(true);
    }
  }, [currentProjectIndex]);

  return (
    <section id="projects">
      <h1>{t('projects.title')}</h1>

      <div className="items">
        <div className="item">
          <a href={projectDatabase[currentProjectIndex][language].link ? projectDatabase[currentProjectIndex][language].link : '#'}>
            <img src={require(`../../assets/images/projects/${projectDatabase[currentProjectIndex][language].image}`)} />
          </a>
        </div>
        <div className="item">
          <h1>{projectDatabase[currentProjectIndex][language].title}</h1>
          <p>{projectDatabase[currentProjectIndex][language].description}</p>
          <div className="buttons">
            <button type="button" onClick={prevProjectHandle} className={disabledPrevBtn ? 'disabled' : ''}>
              <i className="fa-solid fa-arrow-left"></i>
              </button>
            <button type="button" onClick={nextProjectHandle} className={disabledNextBtn ? 'disabled' : ''}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
