import React from "react";
import { projectList } from "./../../db/projects/ProjectList";

const ProjectContainer = () => {
  return (
    <div>
      {projectList.map(proj => {
        return (
          <div>
            <h1>{proj.name}</h1>
            <p>{proj.app_title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;
