/* eslint-disable  */
import {} from 'styled-components';
import { CSSProp, CSSObject } from 'styled-components';
import { theme } from '@styles';
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
