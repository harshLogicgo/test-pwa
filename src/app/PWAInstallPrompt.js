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
    const appScheme = 'com.walletsync.expensemanager://';

    // Create a hidden iframe to try opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appScheme;
    document.body.appendChild(iframe);

    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(iframe);
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
