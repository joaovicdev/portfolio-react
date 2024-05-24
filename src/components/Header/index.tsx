import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <Mobile /> : <Desktop />;
};
