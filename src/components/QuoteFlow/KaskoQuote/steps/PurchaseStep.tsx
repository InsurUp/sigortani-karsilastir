"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import UnifiedPurchaseStep from '../../shared/UnifiedPurchaseStep';

interface PurchaseStepProps {
  onNext: () => void;
}

export default function PurchaseStep({ onNext }: PurchaseStepProps) {
  const router = useRouter();

  const handleNext = () => {
    router.push('/odeme-sonuc?type=kasko');
    };

    return (
    <UnifiedPurchaseStep
      onNext={handleNext}
      branch="kasko"
      localStorageKeys={{
        selectedQuote: 'selectedQuoteForPurchase',
        proposalId: 'currentProposalId',
      }}
    />
  );
}
