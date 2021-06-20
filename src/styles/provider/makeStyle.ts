import { useContext, useCallback } from 'react';
import { Styles } from 'react-jss';
import { ThemeContext } from '../context/styleThemeContext';
// import { createUseStyles, theming } from '../context/styleThemeContext';
import { Theme } from '../theme';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function makeStyle<C extends string = string, Props = unknown>(
  styles: (theme: Theme) => Styles<C, Props, Theme>,
  options?: { name?: string },
) {
  // const useStylesFromTheme = createUseStyles<any, Props, Theme>((theme) => ({}), options);
  // return useStylesFromTheme;
  const useStylesCallback = () => {
    // const theme = useContext(ThemeContext);
    // const styles =
  };

  return useStylesCallback;
}

const useStyles = makeStyle((theme) => ({
  button: {
    background: theme.palette.primary.main,
  },
}));
