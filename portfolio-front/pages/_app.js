import Layout from "../components/layout";
import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="assets/wireframeAnimation.js" />
    </Layout>
  );
}

export default MyApp;
