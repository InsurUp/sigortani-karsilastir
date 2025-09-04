'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAgencyConfig } from '@/context/AgencyConfigProvider';

interface DynamicThemeProviderProps {
  children: React.ReactNode;
}

export default function DynamicThemeProvider({ children }: DynamicThemeProviderProps) {
  const agencyConfig = useAgencyConfig();
  
  const theme = React.useMemo(() => {
    const primaryColor = agencyConfig?.theme?.primaryColor || '#ff9315';
    const secondaryColor = agencyConfig?.theme?.secondaryColor || '#ff9315';
    
    return createTheme({
      palette: {
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: secondaryColor,
        },
      },
      typography: {
        fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: 'none',
              fontWeight: 600,
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-root': {
                borderRadius: 8,
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: primaryColor,
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: primaryColor,
              },
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              color: primaryColor,
              '&.Mui-checked': {
                color: primaryColor,
              },
            },
          },
        },
        MuiRadio: {
          styleOverrides: {
            root: {
              color: primaryColor,
              '&.Mui-checked': {
                color: primaryColor,
              },
            },
          },
        },
        MuiStep: {
          styleOverrides: {
            root: {
              '& .MuiStepLabel-root .Mui-completed': {
                color: `${primaryColor} !important`,
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: `${primaryColor} !important`,
              },
              '& .MuiStepIcon-root.Mui-completed': {
                color: `${primaryColor} !important`,
              },
              '& .MuiStepIcon-root.Mui-active': {
                color: `${primaryColor} !important`,
              },
            },
          },
        },
        MuiLinearProgress: {
          styleOverrides: {
            root: {
              backgroundColor: `${primaryColor}20`,
              '& .MuiLinearProgress-bar': {
                backgroundColor: primaryColor,
              },
            },
          },
        },
      },
    });
  }, [agencyConfig?.theme?.primaryColor, agencyConfig?.theme?.secondaryColor]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}