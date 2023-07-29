import About from "@/components/About";
import Projects from "@/components/Projects";
import BaseLayout from "@/components/layout/BaseLayout";
import React from "react";

const page = () => {
  return (
    <BaseLayout component={<About />}>
      <Projects />
    </BaseLayout>
  );
};

export default page;
