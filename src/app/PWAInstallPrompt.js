"use client";

import { useEffect, useState } from "react";

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true); // Show your custom install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show browser install prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log("Install outcome:", outcome);
      setDeferredPrompt(null);
      setShowInstall(false); // Hide button after use
    }
  };

  if (!showInstall) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
    >
      Install WalletSync
    </button>
  );
}
