import React from 'react';
import aboutImage from '../../assets/images/about.png';
import './about.scss';

export const About: React.FC = () => {
  return (
    <section id="about">
      <img src={aboutImage} />

      <div className="texts">
        <h1>Um pouco sobre mim</h1>
        <p>Desenvolvedor FullStack atuando a mais de 7 anos em projetos 
          profissionais, comecei aos 14 desenvolvendo projetos para pequenas 
          instituições, e desde então venho prestando serviço e consultoria em 
          tecnologia para diversos clientes.</p>
      </div>
    </section>
  );
};
