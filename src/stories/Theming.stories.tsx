import React from 'react';
import { Story, Meta } from '@storybook/react';
import { createTheme, StyleThemeProvider } from '../styles';
import { StyleThemeProviderProps } from '../styles/provider/tool';
import Button from '../components/Button';

export default {
  title: 'Styles/Theming/StyleThemeProvider',
  component: StyleThemeProvider,
} as Meta;

const AppSample = () => (
  <div>
    <Button label="SAMPLE BUTTON" />
  </div>
);

const Template: Story<StyleThemeProviderProps> = (args) => (
  <StyleThemeProvider {...args}>
    <AppSample />
  </StyleThemeProvider>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  theme: createTheme(),
};
