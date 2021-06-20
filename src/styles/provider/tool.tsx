import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Theme } from '../theme';

export interface StyleThemeProviderProps {
  theme: Theme;
}

export const StyleThemeProvider: React.FC<StyleThemeProviderProps> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
