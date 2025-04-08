"use client";

import { useEffect, useState } from "react";

export default function OpenAppPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android/.test(ua);
    if (isMobile) {
      setShowPrompt(true);
    }
  }, []);

  const openApp = () => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    const iosScheme = "walletsync://";
    const iosFallback = "https://apps.apple.com/app/idYOUR_APP_ID";

    const androidScheme = "com.walletsync.expensemanager://";
    const androidFallback =
      "https://play.google.com/store/apps/details?id=com.walletsync.expensemanager";

    const now = Date.now();

    if (isIOS) {
      window.location.href = iosScheme;

      setTimeout(() => {
        const delta = Date.now() - now;
        if (delta < 1500) {
          window.location.href = iosFallback;
        }
      }, 1000);
    } else if (isAndroid) {
      window.location.href = androidScheme;

      setTimeout(() => {
        const delta = Date.now() - now;
        if (delta < 1500) {
          window.location.href = androidFallback;
        }
      }, 1000);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg rounded-lg p-4 z-50">
      <p className="font-semibold">Open in WalletSync App</p>
      <button
        onClick={openApp}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Open App
      </button>
    </div>
  );
}
