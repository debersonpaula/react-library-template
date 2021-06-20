import { createPalette } from '../palette';
import { Theme } from './interfaces';

export function createTheme(): Theme {
  const theme: Theme = {
    palette: createPalette(),
  };
  return theme;
}
