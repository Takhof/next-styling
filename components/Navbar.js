import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { Auth } from "aws-amplify";

function Navbar() {
  const signingUp = async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone_number, // optional - E.164 number convention
          // other custom attributes
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
                signingUp();
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
