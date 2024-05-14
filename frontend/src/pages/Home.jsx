/** @format */

import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import Sidebar from "../components/Sidebar";
import "../App.css";
import { useEffect } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { projects, dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };
    if (user) {
      fetchProjects();
    }
  }, [dispatch, user]);

  return (
    <div className="container-home">
      <Sidebar></Sidebar>
      <Main projects={projects}></Main>
    </div>
  );
}

function Main({ projects }) {
  return (
    <main>
      <Navbar projects={projects}></Navbar>
      <CardList projects={projects}></CardList>
    </main>
  );
}
