import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import ThemeModes, { BaseTheme } from './theme';

export const defaultTheme: BaseTheme = lightTheme;

export const themeModes: ThemeModes = {
  light: lightTheme,
  dark: darkTheme,
};
