import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';
import './services.scss';

export const Services: React.FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <Mobile /> : <Desktop />;
};