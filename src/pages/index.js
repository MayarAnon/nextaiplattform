import Head from "next/head";
import Script from "next/script";
import CardContainer from "../components/Cardcontainer";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="6Lcxi9MI5iBMxxaHpzwqpVPUZ7QKdJ1hc2MxiAK9tLA"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>AI-Overview</title>
        <meta
          name="description"
          content="Discover the power of AI with our comprehensive list of AI tools. Our website offers a one-stop-shop for all the best AI tools available, with detailed descriptions and keyword analysis to help you find the right tools for your needs."
        />
        <meta
          name="keywords"
          content="AI tools, chatbots, natural language processing, machine learning, image recognition, automation"
        />
        <meta name="apple-mobile-web-app-title" content="AI-Overview" />
        <link rel="canonical" href="https://aioverview.info/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:url" content="http://aioverview.info" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI-Overview" />
        <meta
          property="og:description"
          content="Looking for the best AI tools on the internet? Our website provides a comprehensive overview of all the top AI tools available today, including chatbots, natural language processing tools, and more."
        />
        <meta property="og:image" content="/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Overview" />
        <meta
          name="twitter:description"
          content="Looking for the best AI tools on the internet? Our website provides a comprehensive overview of all the top AI tools available today, including chatbots, natural language processing tools, and more."
        />
        <meta name="twitter:image" content="/logo192.png" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4486793179399090"
        crossOrigin="anonymous"
      />
      <Script
        id="aiOverviewScript"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://nextaiplattform.vercel.app/",
            name: "AI-Overview",
            description:
              " Discover the perfect AI tool for your needs with our all-in-one resource, featuring over 100 AI tools",
          }),
        }}
      />
      <main className={"main"}>
        <CardContainer />
      </main>
    </>
  );
}
