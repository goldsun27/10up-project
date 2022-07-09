import "../styles/globals.css";
import "../styles/header.css";
import "../styles/hero-content.css";
import "../styles/eyebrow-top.css";
import "../styles/eyebrow-bottom.css";
import "../styles/footer.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
