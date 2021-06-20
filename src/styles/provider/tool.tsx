import React from 'react';
import { Theme } from '../theme';

export interface StyleThemeProviderProps {
  theme: Theme;
}

export const StyleThemeProvider: React.FC<StyleThemeProviderProps> = ({ ...props }) => {
  return <div {...props} />;
};
