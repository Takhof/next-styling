import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { Auth, Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Navbar({ signUp, user }) {
  let username = "tomato";
  let password = "tomatopassword";
  let email = "tomato@aol.com";
  const signUpTest = async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };
  // const { data: session, status } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        <li>
          <button onClick={signUpTest}>Sign Up</button>
        </li>

        <li>
          <Link legacyBehavior href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
