// eslint-disable-next-line no-unused-vars
import React from "react";
import Projects from "./Projects";

const ProjectDisplay = () => {
  const data = [
    {
      value: "Projects",
      desc: <Projects />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-3">
      <h1 className="text-3xl font-bold text-center border-spacing-2 border-b-2 border-b-blue-600 my-10">
        Projects
      </h1>
      {data.map(({ value, desc }) => (
        <div key={value} className="mb-20">
          {desc}
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
