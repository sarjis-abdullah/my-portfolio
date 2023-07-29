"use client";
import React from "react";

const Experiences = () => {
  const initData = [
    {
      date: "AUG 2022 — Present",
      company: "Inaia, Germany,",
      loc: "(Remote)",
      url: "/",
      designation: "— Software Engineer",
      role: "In my role as a Full-stack Developer at Inaia, I am actively involved in building the Sukuuk App, a revolutionary gateway for investors, property buyers, and sellers to engage in property transactions using a convenient monthly installment system. Currently, I am dedicated to working on the app's development and implementation, ensuring it meets the highest standards of functionality and user experience. My responsibilities also include handling essential components such as authorization with Laravel Permission, integrating Secupay for payments, configuring necessary cron jobs to automate tasks, and making UI for end users.",
      projects: "The Sukuuk Web App",
      tools: "Inertia,PHP,Laravel,VueJS,MySQL,AWS S3,Cron Job,Docker",
    },
    {
      date: "May 2022 - AUG 2022",
      company: "Tikweb,",
      loc: "(Bangladesh) ",
      url: "/",
      designation: "— Fullstack Software Engineer",
      role: "As a Full-stack Developer at Tikweb, Bangladesh, I had the exciting opportunity to work with the Coachsome App, a dynamic platform that serves as a middleware, facilitating seamless interaction between Coaches and Athletes. My role involved developing and implementing key features to ensure the app's successful functionality. Through my expertise and dedication, I contributed to the app's successful launch, and it is now live.",
      projects: "The Coachsome App API & UI",
      tools: "PHP, Laravel, VueJS, Vuetify, MySQL, AWS S3, Cron Job, Docker.",
    },
    {
      date: "Feb 2022 - 31st Dec 2022 (New part time contract July 2023 to Present)",
      company: "Within.co, USA",
      loc: "(Remote) ",
      url: "/",
      designation: "— Fullstack Software Engineer",
      role: "As a Full-stack Developer at Within, I played a key role in building a Google Ads Budget Pacer App, leveraging the vast Google Ads API docs for ad budget management. Despite the challenge of navigating through the extensive API documentation, I diligently read through the material to identify the proper REST API required for our project. My responsibilities also included handling various Google APIs from backend to our frontend app,  implementing social login, and configuring cron jobs.",
      projects: "The Coachsome App API & UI",
      tools: "Typescript, ReactJS, Express, PostgreSQL, Sequelize, Tailwind.",
    },
    {
      date: "March 2021 - Jan 2022",
      company: "Skipper Hospitality, USA",
      loc: "(Remote) ",
      url: "/",
      designation: "— Frontend Engineer",
      role: "As a core front-end engineer, my role was to design, develop and guide the front-end development of our software. I provided a technical overview, ensured adherence to coding standards, and collaborated with cross-functional teams. I designed and implemented user-friendly UI/UX components. I optimized performance, tested and debug frontend code, and strive for continuous improvement. I played a vital role in delivering a high-quality and visually appealing front-end experience.",
      projects: "The Ameswell, The Marram,The Journey East Hampton,The Roger,The Sundance Resort and,The CMS (To render content by the Client).",
      tools: "11ty, Typescript, React, Cypress, Node.js, Tailwind CSS, HTML, CSS, Vanilla Javascript, BrowserStack.",
    },
    {
      date: "Sep 2019 - Feb 2021",
      company: "ReformedTech",
      loc: "(Bangladesh) ",
      url: "/",
      designation: "— Frontend Engineer",
      role: `As a skilled software engineer at ReformedTech, I actively contributed to the successful implementation of various Point of Sale (POS) features like POS terminal, order management etc. for a live project. My expertise in React, PHP, Laravel, and Tailwind played a key role in delivering robust and efficient solutions. 
      
      Additionally, I took on the role of a back-end developer for the Threefold project, where I focused on designing and enhancing API performance using Laravel, VueJS, and Bootstrap. 

      Furthermore, I worked as a full-stack developer on the Childhood project, responsible for analyzing challenges, designing innovative solutions, and developing both front-end and back-end logic with Laravel, VueJS, and Bootstrap. My dedication and versatility in handling diverse tech stacks allowed me to contribute significantly to these projects' success.
      `,
      projects: "Point of Sale App UI & API,Threefold App UI & API (Brand-Factory Deal Management App), Toy Advertisement App UI & CMS, Smart Property App (partially worked)",
      tools: "PHP, Laravel, VueJS, ReactJS, Vuetify, Bootstrap, MySQL, AWS S3, Cron Job, Docker.",
    },
  ];
  const [experiences, setExperiences] = React.useState(initData);
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 xl:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((item) => {
            return (
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 xl:hover:!opacity-100 xl:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none xl:-inset-x-6 xl:block xl:group-hover:bg-slate-800/50 xl:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] xl:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="2018 to Present"
                  >
                    {item.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${item.designation} at ${item.company}`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 xl:block"></span>
                          <span>
                            <span className=''>{item.company}</span>
                            <span className="ml-2 text-slate-400">{item.loc}</span>
                            <span className="ml-2 italic text-teal-300">
                              {item.designation}
                              </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{item.role}</p>
                    <ul
                      className="mt-4 block"
                      aria-label="Technologies used"
                    >
                      {item.projects.split(",").map((tool) => {
                        return (
                          <li className="mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {tool}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {item.tools.split(",").map((tool) => {
                        return (
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              {tool}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
            aria-label="View Full Résumé"
            href="/software-engineer-sarjis-resume.pdf"
            target="_blank"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
