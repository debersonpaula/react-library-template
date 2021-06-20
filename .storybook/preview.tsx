import { addDecorator } from '@storybook/react';
import React from 'react';
import { createTheme, StyleThemeProvider } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = createTheme();

addDecorator((storyFn) => <StyleThemeProvider theme={theme}>{storyFn()}</StyleThemeProvider>);
