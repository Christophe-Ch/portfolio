import { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:thin,extralight,regular,semibold,bold"
        ></link>
      </Head>
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
