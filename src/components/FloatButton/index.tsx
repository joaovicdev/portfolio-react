import React from 'react';
import { whatsapp } from '../../constants/whatsapp_link';
import img from '../../assets/images/whatsapp.svg';
import './floatbutton.scss';

export const FloatButton: React.FC = () => {
  return (
    <a href={whatsapp} target="_blank" className="float-whatsapp-btn">
      <img src={img} alt="Contato via whatsapp" />
    </a>
  );
};
