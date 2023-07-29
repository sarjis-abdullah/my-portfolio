import About from "@/components/About";
import BaseLayout from "@/components/layout/BaseLayout";
import React from "react";

const page = () => {
  return (
    <BaseLayout component={<About />}>
      <About />
    </BaseLayout>
  );
};

export default page;
