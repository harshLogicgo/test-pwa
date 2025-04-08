"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PWAInstallPrompt() {
  const router = useRouter();

  useEffect(() => {
    const oneLinkUrl = "https://walletsync.onelink.me/ubEX/8kvejhlv"; // Replace with dynamic logic if needed
    window.location.href = oneLinkUrl;
  }, []);
}
