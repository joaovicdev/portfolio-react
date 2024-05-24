import React from 'react';
import sitesImage from '../../assets/images/sites.svg';
import systemImage from '../../assets/images/systems.svg';
import designImage from '../../assets/images/design.svg';
import './services.scss';

export const Services: React.FC = () => {
  return (
    <section id="services">
      <h1>O que eu posso fazer por você?</h1>
      <div className="cards">
        <div className="card">
          <img src={sitesImage} alt="Sites" />
          <div className="texts">
            <h1>Web sites</h1>
            <p>Sites de vendas, landing pages 
              e sites institucionais para 
              melhor atender o seu cliente.</p>
          </div>
        </div>
        <div className="card hidden">
          <img src={systemImage} alt="Sistemas" />
          <div className="texts">
            <h1>Sistemas</h1>
            <p>Sistemas de controle e gestão de dados para a sua empresa, com plataformas completas.</p>
          </div>
        </div>
        <div className="card hidden">
          <img src={designImage} alt="Design" />
          <div className="texts">
            <h1>Design</h1>
            <p>Prototipação e criação de telas em softwares para interface usuais e bonitas feitas para o seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};