'use client';

import { useEffect, useState } from 'react';

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
      setShowPrompt(true);
    }
  }, []);

  const handleInstallClick = () => {
    const scheme = 'com.walletsync.expensemanager://';
    const fallbackUrl = 'https://play.google.com/store/apps/details?id=com.walletsync.expensemanager';

    const now = Date.now();

    // Try opening app
    window.location.href = scheme;

    // Set timeout to detect if app is not opened
    setTimeout(() => {
      const delta = Date.now() - now;
      if (delta < 2000) {
        // App not opened — fallback to Play Store
        window.location.href = fallbackUrl;
      }
    }, 1500);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg rounded-lg p-4 z-50">
      <p>Open in WalletSync App</p>
      <button
        onClick={handleInstallClick}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Open App
      </button>
    </div>
  );
}
