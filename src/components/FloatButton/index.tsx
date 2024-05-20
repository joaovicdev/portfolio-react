import React from 'react';
import img from '../../assets/images/whatsapp.svg';
import './floatbutton.scss';

export const FloatButton: React.FC = () => {
  return (
    <a href="#" className="float-whatsapp-btn">
      <img src={img} alt="Contato via whatsapp" />
    </a>
  );
};
