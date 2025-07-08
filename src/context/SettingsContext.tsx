'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

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
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [includeTu, setIncludeTu] = useState(false);
  const [includeVos, setIncludeVos] = useState(false);
  const [openTenses, setOpenTenses] = useState<string[]>([]);
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

  const value = { theme, setTheme, includeTu, setIncludeTu, includeVos, setIncludeVos, openTenses, setOpenTenses, isMounted };

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
