import { createUseStyles, Styles } from 'react-jss';
import { Classes } from 'jss';
import { Theme } from '../theme';

export function makeStyle<C extends string = string, Props = unknown>(
  styles: (theme: Theme) => Styles<C, Props, Theme>,
  options?: { name?: string },
): (data?: Props) => Classes<C> {
  const useStylesCallback = createUseStyles<C, Props>(styles as never, options);
  return useStylesCallback;
}
