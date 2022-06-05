import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { Props } from '.';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes';

const meta: Meta = {
  title: 'components/Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = { children: 'Hi there click me' };
