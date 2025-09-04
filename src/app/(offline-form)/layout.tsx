'use client';

import { AgencyConfigProvider } from '@/context/AgencyConfigProvider';

export default function OfflineFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AgencyConfigProvider>
      {children}
    </AgencyConfigProvider>
  );
}

