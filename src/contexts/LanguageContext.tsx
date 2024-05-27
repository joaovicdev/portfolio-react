import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

type language = 'pt' | 'en';

interface LanguageContextProps {
  language: language;
  handleLanguageChange: (language: language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const LanguageContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [language, setLanguage] = React.useState<language>('pt');
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return <LanguageContext.Provider value={{language, handleLanguageChange}}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const language = useContext(LanguageContext);

  if (!language) {
    throw new Error('Cannot use `LanguageContext` outside of LanguageContextProvider');
  }
  return language;
};