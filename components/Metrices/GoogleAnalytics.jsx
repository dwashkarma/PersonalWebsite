import Script from "next/script";

function GoogleAnalytics() {
  return (
    <>
      <Script
        id="google-analytics-tracking"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-25VMHT8NLN"
      />
      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-25VMHT8NLN');
        `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
