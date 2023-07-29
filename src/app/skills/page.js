import About from "@/components/About";
import Skills from "@/components/Skills";
import BaseLayout from "@/components/layout/BaseLayout";
import React from "react";

const page = () => {
  return (
    <BaseLayout component={<About />}>
      <Skills />
    </BaseLayout>
  );
};

export default page;
