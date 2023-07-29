import React from "react";

const Skills = () => {
  const frontendSkills = [
    {
      title: "Programming Languages: JavaScript, TypeScript",
    },
    {
      title: "Frameworks: React.js, Vue.js",
    },
    {
      title:
        "JamStack & builder: 11ty, Next.js, Nuxt.js, Vite, Gulp, Webpack, Lodash",
    },
    {
      title: "Preprocessors: Sass, PostCSS, Less",
    },
    {
      title:
        "CSS Framework/Libraries: Bulma, Tailwind, Bootstrap, Material Design",
    },
  ];
  const backendSkills = [
    {
      title: "Programming Languages: PHP, JavaScript",
    },
    {
      title: "Frameworks: Express, Laravel",
    },
    {
      title: "Server: Apache, Nginx",
    },
    {
      title: "Database: MySQL, PostgreSQL, MongoDB",
    },
    {
      title: "Others: Docker, AWS S3",
    },
  ];

  const getPreparedSkills = (title) => {
    return title.split(":");
  };
  const SKillSet = ({skills}) => {
    return (
      <ul className="mt-2 block" aria-label="Technologies used">
        {skills.map((skill) => {
          return (
            <li key={skill} className="mr-1.5 mt-2">
              <div className="flex items-center gap-4 px-3 py-1 text-sm font-medium leading-5 ">
                <span className="">{skill.title.split(":")[0]}:</span>
                <span className="flex items-center rounded-full text-teal-300">
                  {/* {skill.title.split(":")[1].split(",")} */}
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {skill.title.split(":")[1]}
                            </div>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <section
      id="skill"
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
      aria-label="Skills"
    >
      <section>
        <article>
          <header className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            <h5>Frontend</h5>
          </header>
          <SKillSet skills={frontendSkills} />
        </article>
        <article>
          <header className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            <h5>Backend</h5>
          </header>
          <SKillSet skills={backendSkills} />
        </article>
      </section>
    </section>
  );
};

export default Skills;
