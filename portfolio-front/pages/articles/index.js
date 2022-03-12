import styles from "../../styles/articles.module.scss";
import Slider from "../../components/slider";
import { fetchAPI } from "../../lib/api";
import { useState } from "react";

let toggledSkills,
  setToggledSkills,
  shownArticles,
  setShownArticles,
  allArticles;

export default function Articles({ articles, skills }) {
  allArticles = articles;
  [toggledSkills, setToggledSkills] = useState(["all"]);
  [shownArticles, setShownArticles] = useState(articles);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <span className={["wireframe-text", styles.subtitle].join(" ")}>
            Look&nbsp;through
          </span>
          <h1>My&nbsp;articles</h1>
        </div>

        <div className={styles.scrollInfoContainer}>
          <span>scroll down</span>
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

      <div className={styles.searchContainer}>
        <div className={styles.searchPanel}>
          <h2>What are you looking for ?</h2>
          <div className={styles.inputs}>
            {skills.map((skill) => (
              <div className={styles.inputGroup} key={skill}>
                <input
                  id={skill}
                  type="checkbox"
                  onChange={() => updateArticles(skill)}
                  checked={toggledSkills.includes(skill)}
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <Slider items={shownArticles} />
        </div>
      </div>
    </>
  );
}

const updateArticles = (skill) => {
  if (skill == "all") {
    setToggledSkills(["all"]);
    setShownArticles(allArticles);

    return;
  }

  let newToggledSkills;
  if (toggledSkills.includes(skill)) {
    newToggledSkills = toggledSkills.filter((s) => s != skill);
    if (newToggledSkills.length == 0) {
      setToggledSkills(["all"]);
      setShownArticles(allArticles);

      return;
    }
  } else {
    newToggledSkills = [...toggledSkills, skill];
    if (newToggledSkills.includes("all")) {
      newToggledSkills = newToggledSkills.filter((s) => s != "all");
    }
  }

  setToggledSkills(newToggledSkills);

  setShownArticles(
    allArticles.filter((article) =>
      newToggledSkills.every((skill) => article.skills.includes(skill))
    )
  );
};

export async function getStaticProps() {
  const result = await fetchAPI("/articles?populate=skills");
  const skills = new Set();

  const articles = result.data.map((article) => {
    const articleSkills = article.attributes.skills.data.map((skill) => {
      skills.add(skill.attributes.name);
      return skill.attributes.name;
    });

    return {
      title: article.attributes.title,
      slug: article.attributes.slug,
      excerpt: article.attributes.excerpt,
      type: "articles",
      from: article.attributes.publishedAt,
      skills: articleSkills,
    };
  });

  return {
    props: {
      articles,
      skills: ["all", ...skills],
    },
  };
}
