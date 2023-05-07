import React from 'react';
import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: '#000000',
  secondary: '#F2F2F2',
  warning: '#E6A800',
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading: React.CSSProperties;
    title: React.CSSProperties;
    text: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    title: React.CSSProperties;
    text: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading: true;
    title: true;
    text: true;
  }
}

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    warning: {
      main: colors.warning,
    },
  },
  typography: {
    heading: {
      fontSize: '25px',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '18px',
      fontWeight: 'normal',
    },
  },
});
