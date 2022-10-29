import styles from "../styles/About.module.scss";
import Footer from "../components/Footer";

function About() {
  return (
    <div className={styles.highlightscss}>
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
