"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");


  // 첫 로드시 localStorage 또는 시스템 설정 불러오기
  useEffect(() => {
    const localTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(localTheme);
    document.documentElement.dataset.theme = localTheme
  }, []);

  // 토글 함수
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: theme === "dark", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// 커스텀 훅
export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useDarkMode must be used within a ThemeProvider");
  return context;
};
