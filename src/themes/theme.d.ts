import 'styled-components';

interface Values {
  main: string;
  hovered: string;
}

interface Variants {
  primary: Values;
  secondary: Values;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      textColor: Variants;
      backgroundColor: Variants;
      border: Variants;
    };
  }
}
