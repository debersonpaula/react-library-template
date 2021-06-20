import { Styles } from 'react-jss';
import { createUseStyles } from '../context/styleThemeContext';
import { Theme } from '../theme';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function makeStyle<Props = null>(style: (theme: Theme) => Styles<any, Props, Theme>) {
  const useStylesFromTheme = createUseStyles((theme) => ({
    button: {
      background: theme,
    },
    label: {
      fontWeight: 'bold',
    },
  }));

  return useStylesFromTheme;
}
