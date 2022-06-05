interface Modes {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface TypographyVariants {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  textTransform?: string;
}

export interface BaseTheme {
  breakpoints: {
    keys: Array;
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    unit: string;
  };
  direction: string;
  palette: {
    mode: string;
    common: {
      black: string;
      white: string;
    };
    primary: Modes;
    secondary: Modes;
    error: Modes;
    warning: Modes;
    info: Modes;
    success: Modes;
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      icon?: string;
    };
    background: {
      paper: string;
      default: string;
    };
    action: {
      active: string;
      hover: string;
      hoverOpacity: number;
      selected: string;
      selectedOpacity: number;
      disabled: string;
      disabledBackground: string;
      disabledOpacity: number;
      focus: string;
      focusOpacity: number;
      activatedOpacity: number;
    };
    divider: string;
    contrastThreshold: number;
    tonalOffset: number;
  };
  shadows: Array;
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  };
  typography: {
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: TypographyVariants;
    h2: TypographyVariants;
    h3: TypographyVariants;
    h4: TypographyVariants;
    h5: TypographyVariants;
    h6: TypographyVariants;
    subtitle1: TypographyVariants;
    subtitle2: TypographyVariants;
    body1: TypographyVariants;
    body2: TypographyVariants;
    button: TypographyVariants;
    caption: TypographyVariants;
    overline: TypographyVariants;
  };
  zIndex: {
    mobileStepper: number;
    fab: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tootip: number;
  };
}

export default interface ThemeModes {
  light: BaseTheme;
  dark: BaseTheme;
}
