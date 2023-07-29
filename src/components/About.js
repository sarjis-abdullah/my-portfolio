import React from "react";

const About = () => {
  const backgrouds = [
    "As a full-stack software engineer, I am having four years of working experience in multifarious challenging positions in software design and development with many projects (e.g. fintech, pos, property management, hotel website by booking engine, client personal project, etc.).",
    "I have experience in developing large scaled web applications (e.g. worked with Google and Google ads API projects, coachsome project, etc.) with playing the role of leading a team and managing client communication and requirement analysis. Various roles, and responsibilities in projects equipped me with valuable skills in teamwork, communication, and problem-solving.",
    "Currently, I am working with the Inaia fintech company, and VueJS 3, Laravel 9, Docker, and Tailwind are tech stacks. My favorite tech stack also includes programming with Javascript, making user interfaces with ReactJS, and problem-solving with Python.",
  ];

  const ExampleComponent = () => {
    return (
      <p className="mb-4">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://us.mullenlowe.com/"
          target="_blank"
          rel="noreferrer"
        >
          advertising agency
        </a>
        , a
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://starry.com/"
          target="_blank"
          rel="noreferrer"
        >
          start-up
        </a>
        , a{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://scout.camd.northeastern.edu/"
          target="_blank"
          rel="noreferrer"
        >
          student-led design studio
        </a>
        , and a{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.apple.com/apple-music/"
          target="_blank"
          rel="noreferrer"
        >
          huge corporation
        </a>
        .
      </p>
    );
  };
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 xl:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 xl:sr-only">
          About
        </h2>
      </div>
      <div>
        {backgrouds.map((item) => (
          <p key={item} className="mb-4">{item}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
