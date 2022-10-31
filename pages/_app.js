import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import Footer from "@/layout/Footer";
import "styles/layout.css";
import Head from "next/head";
import "components/Navbar.css";
import Navbar from "components/Navbar";
import { SessionProvider } from "next-auth/react";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Learning Next.JS</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
