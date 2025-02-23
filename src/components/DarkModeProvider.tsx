"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    setDarkMode: (value: boolean) => void;
  }

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
  }

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    if (storedDarkMode) {
        setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
      if (isDarkMode) {
          document.documentElement.classList.add("dark");
      } else {
          document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode }}>
      <div className={isDarkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
      throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}