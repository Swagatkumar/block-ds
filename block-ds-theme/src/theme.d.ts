interface Modes {
  light: string;
  main: string;
  dark: string;
}

export interface DefaultTheme {
  palette: {
    primary: Modes;
    secondary: Modes;
    error: Modes;
    warning: Modes;
    info: Modes;
    success: Modes;
  };
}
