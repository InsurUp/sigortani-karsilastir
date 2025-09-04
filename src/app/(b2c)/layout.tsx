'use client';

import { ApolloProvider } from '@apollo/client';
import { AgencyConfigProvider } from '@/context/AgencyConfigProvider';
import { client } from '@/apollo/client';
import { CssBaseline } from '@mui/material';
import DynamicThemeProvider from '../../components/DynamicThemeProvider';

export default function B2CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <AgencyConfigProvider>
        <DynamicThemeProvider>
          <CssBaseline />
          {children}
        </DynamicThemeProvider>
      </AgencyConfigProvider>
    </ApolloProvider>
  );
}