import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { Auth, Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Navbar({ signUp, user }) {
  let username = "tomato@tomato.com";
  let password = "tomatopassword";
  let email = "tomato@tomato.com";
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">Amazon Auth</a>
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
