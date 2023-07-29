import About from "@/components/About";
import Experiences from "@/components/Experiences";
import BaseLayout from "@/components/layout/BaseLayout";
import React from "react";

const page = () => {
  return (
    <BaseLayout component={<About />}>
      <Experiences />
    </BaseLayout>
  );
};

export default page;
