export interface Palette {
  primary: PaletteColor;
//   secondary: PaletteColor;
}

interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}
