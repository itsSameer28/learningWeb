// "use client"
import Head from "next/head";
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "../utils/createEmotionCache";
// const clientSideEmotionCache = createEmotionCache();
import { StyledEngineProvider } from "@mui/material/styles";

import {
  Navbar,
  Footer,
  LandingPageHeader,
  LandingPageMiddle,
  Testimonials,
} from "../components";

export default function Home() {
  // const styles = useStyles();
  return (
    // <CacheProvider value={emotionCache}>
    <StyledEngineProvider injectFirst>
      <Head>
        <title>Learning-Courses</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Plus+Jakarta+Sans&family=Red+Hat+Display&display=swap');
        </style>
      </Head>
      <header>
        <Navbar pageName={"home"} />
      </header>
      <LandingPageHeader />
      <LandingPageMiddle />
      <Testimonials />

      <footer>
        <Footer />
      </footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 !important;
          font-family: "Plus Jakarta Sans";
        }
        * {
          box-sizing: border-box;
        }
        a,
        a:hover,
        a:visited,
        a:active {
          color: inherit;
          text-decoration: none;
        }
        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #464646;
          border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #313131;
        }
      `}</style>
    </StyledEngineProvider>
    // </CacheProvider>
  );
}
