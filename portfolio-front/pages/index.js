import Link from "next/link";
import styles from "../styles/home.module.scss";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <div className={styles.firstSlideContainer}>
        <div className={styles.titleContainer}>
          <span>Hi, I'm</span>
          <h1>
            Christophe
            <br />
            CHICHMANIAN
          </h1>
          <Link href="/contact">
            <a className="outline">contact me</a>
          </Link>
        </div>

        <div className={styles.scrollInfoContainer}>
          <span>who am I ?</span>
          <svg
            className={styles.arrowDown}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
          </svg>
        </div>
      </div>

      <div className={styles.whoAmIContainer}>
        <h2>WHO AM I ?</h2>
        <div className={styles.contentContainer}>
          <div className={styles.textWithSubtitle}>
            <span className={[styles.subtitle, "wireframe-text"].join(" ")}>
              my name is
            </span>
            <p>
              Christophe CHICHMANIAN dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className={styles.sliderContainer}>
            <Slider />
          </div>
        </div>
      </div>

      <div className={styles.whatDoIDoContainer}>
        <h2>WHAT DO I DO ?</h2>
        <div className={styles.paragraphsContainer}>
          <div className={styles.textWithSubtitle}>
            <span
              className={[styles.subtitle, styles.left, "wireframe-text"].join(
                " "
              )}
            >
              CODING
            </span>
            <p>
              Christophe CHICHMANIAN dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className={styles.textWithSubtitle}>
            <span
              className={[
                styles.subtitle,
                styles.right,
                styles.bottom,
                "wireframe-text",
              ].join(" ")}
            >
              CYBER
              <br />
              SECURITY
            </span>
            <p>
              Christophe CHICHMANIAN dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        <div className={styles.actionsContainer}>
          <span>next, take a look at</span>
          <div className={styles.actions}>
            <Link href="/projects">
              <a className="outline">my projects</a>
            </Link>
            or
            <Link href="/blog">
              <a className="full">my blog</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
