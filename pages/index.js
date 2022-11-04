import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

function Home({ timestamp, signOut, user }) {
  // console.log(data, session, status);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>
          {console.log(user)}
          Welcome to{" "}
          <a
            href="http://takhof.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom
          </a>
          s Test Page!
        </h2>
        <p></p>
        <h3>
          <p>Testing ISR on AWS....</p>
          <p>
            Current time is {timestamp} milliseconds since the beginning of
            time.
          </p>
          <p>
            Click <button onClick={signOut}>Here</button> to log out.{" "}
          </p>
        </h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      timestamp: new Date().getTime(),
    },
    revalidate: 30,
  };
};

export default withAuthenticator(Home);
