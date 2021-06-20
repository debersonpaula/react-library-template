import { Palette } from './interfaces';

export function createPalette(): Palette {
  const palette: Palette = {
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
  };

  return palette;
}
