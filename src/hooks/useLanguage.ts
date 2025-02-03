import { useState } from 'react';

export type Language = 'en' | 'es';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return { language, toggleLanguage };
}