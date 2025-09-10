// Dynamic site URL utility
export function getSiteUrl(): string {
  if (typeof window !== 'undefined') {
    // Client-side: use current window location
    return window.location.origin;
  }
  
  // Server-side: check environment variables first, then use defaults
  return process.env.NEXT_PUBLIC_SITE_URL || 
         process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
         'http://localhost:3000';
}

export function getSiteName(): string {
  return 'Sigortanı Karşılaştır';
}

export function getSiteHandle(): string {
  return '@sigortani_karsilastir';
}