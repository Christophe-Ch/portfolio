import Link from "next/link";
import styles from "../styles/components/nav.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <input type="checkbox" className={styles.toggleMenu} />

      <div className={styles.hamburgerButton}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.container}>
        <span className={styles.navTitle}>MENU</span>
        <nav>
          <Link href="/">
            <a className={cn({ [styles.active]: router.pathname == "/" })}>
              home
            </a>
          </Link>
          <span></span>
          <Link href="/projects">
            <a className={cn({ [styles.active]: router.pathname.startsWith("/projects") })}>
              projects
            </a>
          </Link>
          <span></span>
          <Link href="/blog">
            <a className={cn({ [styles.active]: router.pathname.startsWith("/articles") })}>blog</a>
          </Link>
          <span></span>
          <Link href="/contact">
            <a className={cn({ [styles.active]: router.pathname == "/contact" })}>contact</a>
          </Link>
        </nav>
      </div>
    </>
  );
}
