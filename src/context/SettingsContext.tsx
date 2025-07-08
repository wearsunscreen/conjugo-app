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
  includeTu: boolean;
  setIncludeTu: (include: boolean) => void;
  includeVos: boolean;
  setIncludeVos: (include: boolean) => void;
  openTenses: string[];
  setOpenTenses: React.Dispatch<React.SetStateAction<string[]>>;
  isMounted: boolean;
  tenseVisibility: Record<string, boolean>;
  setTenseVisibility: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [includeTu, setIncludeTu] = useState(false);
  const [includeVos, setIncludeVos] = useState(false);
  const [openTenses, setOpenTenses] = useState<string[]>([]);
  const [tenseVisibility, setTenseVisibility] = useState<Record<string, boolean>>(defaultTenseVisibility);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) setTheme(storedTheme);
      
      const storedIncludeTu = localStorage.getItem('includeTu');
      if (storedIncludeTu) setIncludeTu(JSON.parse(storedIncludeTu));

      const storedIncludeVos = localStorage.getItem('includeVos');
      if (storedIncludeVos) setIncludeVos(JSON.parse(storedIncludeVos));
      
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
      localStorage.setItem('includeTu', JSON.stringify(includeTu));
    }
  }, [includeTu, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('includeVos', JSON.stringify(includeVos));
    }
  }, [includeVos, isMounted]);

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

  const value = { theme, setTheme, includeTu, setIncludeTu, includeVos, setIncludeVos, openTenses, setOpenTenses, isMounted, tenseVisibility, setTenseVisibility };

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
