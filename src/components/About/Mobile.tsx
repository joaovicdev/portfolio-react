import React from 'react';
import aboutImage from '../../assets/images/about_mobile.png';
import './about.scss';

export const Mobile: React.FC = () => {
  return (
    <section id="about">
      <h1>Um pouco sobre mim</h1>
      <img src={aboutImage} />
      <p>Desenvolvedor FullStack atuando a mais de 7 anos em projetos 
        profissionais, comecei aos 14 desenvolvendo projetos para pequenas 
        instituições, e desde então venho prestando serviço e consultoria em 
        tecnologia para diversos clientes.</p>
    </section>
  );
};
