/** @format */

import { ProjectsContext } from "../context/ProjectContext";
import { useContext } from "react";

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside anProjectsContextProvider"
    );
  }

  return context;
};
