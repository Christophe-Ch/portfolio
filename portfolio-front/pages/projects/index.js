import styles from "../../styles/projects.module.scss";
import Slider from "../../components/slider";
import { fetchAPI } from "../../lib/api";
import { useState } from "react";

let toggledSkills,
  setToggledSkills,
  shownProjects,
  setShownProjects,
  allProjects;

export default function Projects({ projects, skills }) {
  allProjects = projects;
  [toggledSkills, setToggledSkills] = useState(["all"]);
  [shownProjects, setShownProjects] = useState(projects);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <span className={["wireframe-text", styles.subtitle].join(" ")}>
            Check&nbsp;out
          </span>
          <h1>My&nbsp;projects</h1>
          <a
            href="https://github.com/Christophe-Ch"
            target="_blank"
            className={["outline", styles.githubButton].join(" ")}
          >
            find me on
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
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
                  onChange={() => updateProjects(skill)}
                  checked={toggledSkills.includes(skill)}
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <Slider items={shownProjects} />
        </div>
      </div>
    </>
  );
}

const updateProjects = (skill) => {
  if (skill == "all") {
    setToggledSkills(["all"]);
    setShownProjects(allProjects);

    return;
  }

  let newToggledSkills;
  if (toggledSkills.includes(skill)) {
    newToggledSkills = toggledSkills.filter((s) => s != skill);
    if (newToggledSkills.length == 0) {
      setToggledSkills(["all"]);
      setShownProjects(allProjects);

      return;
    }
  } else {
    newToggledSkills = [...toggledSkills, skill];
    if (newToggledSkills.includes("all")) {
      newToggledSkills = newToggledSkills.filter((s) => s != "all");
    }
  }

  setToggledSkills(newToggledSkills);

  setShownProjects(
    allProjects.filter((project) =>
      newToggledSkills.every((skill) => project.skills.includes(skill))
    )
  );
};

export async function getStaticProps() {
  const result = await fetchAPI("/projects?populate=skills");
  const skills = new Set();

  const projects = result.data.map((project) => {
    const projectSkills = project.attributes.skills.data.map((skill) => {
      skills.add(skill.attributes.name);
      return skill.attributes.name;
    });

    return {
      title: project.attributes.name,
      slug: project.attributes.slug,
      excerpt: project.attributes.excerpt,
      type: "projects",
      from: project.attributes.publishedAt,
      skills: projectSkills,
    };
  });

  return {
    props: {
      projects,
      skills: ["all", ...skills],
    },
  };
}
