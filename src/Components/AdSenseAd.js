import React, { useEffect } from "react";

function AdSenseAd() {
  useEffect(() => {
    // Load Google AdSense script and ads here
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.head.appendChild(script);

    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        ad_client: "your-ad-client-id",
        enable_page_level_ads: true,
      });
    };
  }, []);

  return (
    <div className="ad-container">
      {/* This div will be replaced with the actual ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="your-ad-client-id"
        data-ad-slot="your-ad-slot"
        data-ad-format="auto"
      ></ins>
    </div>
  );
}

export default AdSenseAd;
