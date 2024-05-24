import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';
import './about.scss';

export const About: React.FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <Mobile /> : <Desktop />;
};
