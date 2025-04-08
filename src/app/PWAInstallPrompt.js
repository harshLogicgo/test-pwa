"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PWAInstallPrompt() {
  const router = useRouter();

  useEffect(() => {
    const oneLinkUrl = "https://walletsync.onelink.me/ubEX/8kvejhlv"; // Replace with dynamic logic if needed
    window.location.href = oneLinkUrl;
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){
          (t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))
        },t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],
        o.async=1,o.src="https://websdk.appsflyer.com/?st=banners&af_id=" + i,
        p.parentNode.insertBefore(o,p)
      }(window,document,"script",0,"AF","banners","YOUR_APPSFLYER_DEV_KEY");
      AF('banners', 'showBanner');
      `;
      document.body.appendChild(script);
    }
  }, []);

  return null; // no UI needed
}
