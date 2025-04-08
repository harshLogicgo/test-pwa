"use client";

import { useEffect } from "react";

export default function AppsFlyerBanner() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) return;

    const script = document.createElement("script");
    script.innerHTML = `
    !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AFfunction(){(t.AF.q=t.AF.q[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com/?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "b82895b6-0c56-47dd-bdd4-2b142eebec1c"}});
    AF('banners', 'showBanner')
    `;
    document.body.appendChild(script);

    return () => {
      // Clean up if needed
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
