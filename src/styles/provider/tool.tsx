import React from 'react';
import { ThemeContext } from '../context/styleThemeContext';
import { Theme } from '../theme';

export interface StyleThemeProviderProps {
  theme: Theme;
}

export const StyleThemeProvider: React.FC<StyleThemeProviderProps> = ({ children, theme }) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
