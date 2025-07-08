'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TENSES } from '@/lib/verbs';

type Theme = 'light' | 'dark';

// Create a default map for tense visibility
const defaultTenseVisibility: Record<string, boolean> = {
  "Presente do Indicativo": true,
  "Pretérito Perfeito do Indicativo": true,
  "Pretérito Imperfeito do Indicativo": true,
  "Futuro do Presente do Indicativo": true,
  "Presente do Subjuntivo": true,
  "Imperativo Afirmativo": true,
  "Imperativo Negativo": true,
  "Pretérito Mais-que-perfeito do Indicativo": false,
  "Futuro do Pretérito do Indicativo": false,
  "Pretérito Imperfeito do Subjuntivo": false,
  "Futuro do Subjuntivo": false,
  "Infinitivo Pessoal": false,
};

// Ensure all tenses from TENSES have a default value
TENSES.forEach(tense => {
  if (defaultTenseVisibility[tense] === undefined) {
    defaultTenseVisibility[tense] = false;
  }
});


interface SettingsContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  includeInformal: boolean;
  setIncludeInformal: (include: boolean) => void;
  openTenses: string[];
  setOpenTenses: React.Dispatch<React.SetStateAction<string[]>>;
  isMounted: boolean;
  tenseVisibility: Record<string, boolean>;
  setTenseVisibility: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [includeInformal, setIncludeInformal] = useState(false);
  const [openTenses, setOpenTenses] = useState<string[]>([]);
  const [tenseVisibility, setTenseVisibility] = useState<Record<string, boolean>>(defaultTenseVisibility);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) setTheme(storedTheme);
      
      const storedIncludeInformal = localStorage.getItem('includeInformal');
      if (storedIncludeInformal) setIncludeInformal(JSON.parse(storedIncludeInformal));

      const storedOpenTenses = localStorage.getItem('openTenses');
      if (storedOpenTenses) setOpenTenses(JSON.parse(storedOpenTenses));

      const storedTenseVisibility = localStorage.getItem('tenseVisibility');
      if (storedTenseVisibility) {
        // Merge with defaults to handle any new tenses added to the app
        const parsedVisibility = JSON.parse(storedTenseVisibility);
        setTenseVisibility(prev => ({...prev, ...parsedVisibility}));
      }

    } catch (e) {
      console.error("Failed to load settings from local storage", e);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.className = theme;
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('includeInformal', JSON.stringify(includeInformal));
    }
  }, [includeInformal, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('openTenses', JSON.stringify(openTenses));
    }
  }, [openTenses, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('tenseVisibility', JSON.stringify(tenseVisibility));
    }
  }, [tenseVisibility, isMounted]);

  const value = { theme, setTheme, includeInformal, setIncludeInformal, openTenses, setOpenTenses, isMounted, tenseVisibility, setTenseVisibility };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
