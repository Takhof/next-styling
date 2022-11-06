import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
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
