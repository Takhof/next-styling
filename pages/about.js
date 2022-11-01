import styles from "../styles/About.module.scss";
import Footer from "../components/layout/Footer";
import Head from "next/head";

function About() {
  return (
    <div className={styles.highlightscss}>
      <Head>
        <title>Tom Page</title>
        <meta name="description" content="learning nextjs"></meta>
      </Head>
      About Page
      <button className="btn btn-success">Primary button </button>
    </div>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
