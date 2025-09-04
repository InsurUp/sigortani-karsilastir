import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthConfig {
  sessionDurationMinutes?: number;
  rememberMeDurationDays?: number;
  autoLogoutWarningMinutes?: number;
  extendSessionOnActivity?: boolean;
}

interface AuthState {
  user: any | null;
  customerId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  
  // Session tracking
  loginTime: number | null;
  lastActivityTime: number | null;
  rememberMe: boolean;
  logoutTimer: NodeJS.Timeout | null;
  warningTimer: NodeJS.Timeout | null;
  
  // Auth config properties
  sessionDurationMinutes: number;
  rememberMeDurationDays: number;
  autoLogoutWarningMinutes: number;
  extendSessionOnActivity: boolean;
  
  setUser: (user: any) => void;
  setCustomerId: (id: string) => void;
  setToken: (token: string) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  updateAuthConfig: (config: AuthConfig) => void;
  updateActivity: () => void;
  checkSessionExpiry: () => boolean;
  startSessionTimer: () => void;
  clearSessionTimers: () => void;
  setRememberMe: (remember: boolean) => void;
}

// Default config values
const DEFAULT_AUTH_CONFIG = {
  sessionDurationMinutes: 30,
  rememberMeDurationDays: 7,
  autoLogoutWarningMinutes: 5,
  extendSessionOnActivity: true,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      customerId: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      
      // Session tracking
      loginTime: null,
      lastActivityTime: null,
      rememberMe: false,
      logoutTimer: null,
      warningTimer: null,
      
      // Default auth config
      ...DEFAULT_AUTH_CONFIG,

      setUser: (user) => {
        const now = Date.now();
        set({ 
          user, 
          isAuthenticated: !!user,
          loginTime: now,
          lastActivityTime: now 
        });
        if (user) {
          get().startSessionTimer();
        }
      },
      
      setCustomerId: (id) => set({ customerId: id }),
      
      setToken: (accessToken) => {
        const now = Date.now();
        set({ 
          accessToken, 
          isAuthenticated: !!accessToken,
          loginTime: now,
          lastActivityTime: now 
        });
        if (accessToken) {
          get().startSessionTimer();
        }
      },
      
      setTokens: (accessToken, refreshToken) => {
        const now = Date.now();
        set({ 
          accessToken, 
          refreshToken, 
          isAuthenticated: true,
          loginTime: now,
          lastActivityTime: now 
        });
        get().startSessionTimer();
      },
      
      logout: () => {
        get().clearSessionTimers();
        set({ 
          user: null, 
          customerId: null,
          accessToken: null, 
          refreshToken: null, 
          isAuthenticated: false,
          loginTime: null,
          lastActivityTime: null,
          rememberMe: false,
          logoutTimer: null,
          warningTimer: null
        });
      },
      
      setRememberMe: (remember) => set({ rememberMe: remember }),
      
      updateAuthConfig: (config: AuthConfig) => set((state) => ({
        ...state,
        ...config,
      })),
      
      updateActivity: () => {
        const state = get();
        if (state.isAuthenticated && state.extendSessionOnActivity) {
          const now = Date.now();
          set({ lastActivityTime: now });
          // Timer'ları yeniden başlat
          state.startSessionTimer();
        }
      },
      
      checkSessionExpiry: () => {
        const state = get();
        if (!state.isAuthenticated || !state.loginTime) {
          return false;
        }

        const now = Date.now();
        const sessionDuration = state.rememberMe 
          ? state.rememberMeDurationDays * 24 * 60 * 60 * 1000 // Remember me durumunda gün cinsinden
          : state.sessionDurationMinutes * 60 * 1000; // Normal durumda dakika cinsinden

        const timeToCheck = state.extendSessionOnActivity && state.lastActivityTime 
          ? state.lastActivityTime 
          : state.loginTime;

        const isExpired = (now - timeToCheck) > sessionDuration;
        
        if (isExpired) {
          state.logout();
          return true;
        }
        return false;
      },
      
      startSessionTimer: () => {
        const state = get();
        
        // Mevcut timer'ları temizle
        state.clearSessionTimers();
        
        if (!state.isAuthenticated || !state.loginTime) {
          return;
        }

        const sessionDuration = state.rememberMe 
          ? state.rememberMeDurationDays * 24 * 60 * 60 * 1000
          : state.sessionDurationMinutes * 60 * 1000;
          
        const warningTime = state.autoLogoutWarningMinutes * 60 * 1000;
        const timeUntilWarning = sessionDuration - warningTime;
        
        // Warning timer
        if (timeUntilWarning > 0) {
          const warningTimer = setTimeout(() => {
            // Session warning event dispatch
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('sessionWarning', {
                detail: { minutesLeft: state.autoLogoutWarningMinutes }
              }));
            }
          }, timeUntilWarning);
          
          set({ warningTimer });
        }
        
        // Logout timer
        const logoutTimer = setTimeout(() => {
          state.logout();
          // Session expired event dispatch
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('sessionExpired'));
          }
        }, sessionDuration);
        
        set({ logoutTimer });
      },
      
      clearSessionTimers: () => {
        const state = get();
        if (state.logoutTimer) {
          clearTimeout(state.logoutTimer);
        }
        if (state.warningTimer) {
          clearTimeout(state.warningTimer);
        }
        set({ logoutTimer: null, warningTimer: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        customerId: state.customerId,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
        loginTime: state.loginTime,
        lastActivityTime: state.lastActivityTime,
        rememberMe: state.rememberMe,
        sessionDurationMinutes: state.sessionDurationMinutes,
        rememberMeDurationDays: state.rememberMeDurationDays,
        autoLogoutWarningMinutes: state.autoLogoutWarningMinutes,
        extendSessionOnActivity: state.extendSessionOnActivity,
      }),
    }
  )
);