import { Globe } from 'lucide-react';
import { Language } from '../hooks/useLanguage';

interface LanguageToggleProps {
  language: Language;
  toggleLanguage: () => void;
}

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors flex items-center gap-2 text-sm border border-gray-700"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}