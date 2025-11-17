import { create } from 'zustand';

export interface LoadingContent {
  title: string;
  description: string;
  icon?: React.ReactNode;
  loadingText?: string;
}

interface LoadingState {
  isLoading: boolean;
  progress: number;
  content: LoadingContent | null;
  productType: string | null;
  proposalId: string | null;
  hasFirstQuote: boolean;
  startLoading: (productType: string, content: LoadingContent, proposalId?: string) => void;
  setProgress: (progress: number) => void;
  setFirstQuoteReceived: () => void;
  stopLoading: () => void;
  reset: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  progress: 0,
  content: null,
  productType: null,
  proposalId: null,
  hasFirstQuote: false,
  
  startLoading: (productType, content, proposalId) => set({
    isLoading: true,
    progress: 0,
    content,
    productType,
    proposalId: proposalId || null,
    hasFirstQuote: false,
  }),
  
  setProgress: (progress) => set({ progress }),
  
  setFirstQuoteReceived: () => set({ hasFirstQuote: true }),
  
  stopLoading: () => set({
    isLoading: false,
    progress: 100,
  }),
  
  reset: () => set({
    isLoading: false,
    progress: 0,
    content: null,
    productType: null,
    proposalId: null,
    hasFirstQuote: false,
  }),
}));

