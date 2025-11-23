import { useEffect } from "react";

function BlogAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: 435, height: 435 }}
      data-ad-client="ca-pub-3111470717881486"
      data-ad-slot="1562350911"
    ></ins>
  );
}

export default BlogAd;
