"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookieConsentStatus";

type CookieConsentStatus = "accepted" | "rejected";

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (status: CookieConsentStatus) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
    localStorage.setItem("cookieConsentUpdatedAt", new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      aria-label="Çerez tercihleri"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[440px] sm:px-0 sm:pb-0"
    >
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_16px_48px_rgba(15,23,42,0.18)]">
        <div className="space-y-3">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Çerez tercihleri</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Deneyiminizi iyileştirmek ve zorunlu site işlevlerini çalıştırmak için çerezlerden yararlanıyoruz.
              Tercihinizi dilediğiniz zaman tarayıcı ayarlarınızdan değiştirebilirsiniz.
            </p>
          </div>

          <Link
            href="/cerez-politikasi"
            className="inline-flex text-sm font-semibold text-[#ed1c24] underline-offset-4 hover:underline"
          >
            Çerez Politikasını İncele
          </Link>

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Reddet
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#ed1c24] px-4 text-sm font-semibold text-white transition hover:bg-[#c9161d]"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieNotification;
