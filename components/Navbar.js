import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { Auth, Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
function Navbar() {
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
      </ul>
    </nav>
  );
}

export default Navbar;
