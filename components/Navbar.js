import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
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

        {status === "unauthenticated" && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {status === "authenticated" && (
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
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
