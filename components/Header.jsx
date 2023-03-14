import Link from "next/link";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <span>Shared Header Component</span>
      <nav className={Styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
