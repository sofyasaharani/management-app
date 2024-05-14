/** @format */

import { BsSearch } from "react-icons/bs";
import { BiCommand } from "react-icons/bi";
import { WiStars } from "react-icons/wi";

export default function Navbar({ projects }) {
  return (
    <div className="navbar-container">
      <NumResults projects={projects} />
      <div className="nav-content">
        <div className="search-container">
          <BsSearch />
          <input className="search" type="text" placeholder="Search Projects" />
          <a>
            <BiCommand />S
          </a>
        </div>
        <button
          // href="/new-project"
          className="button project">
          <WiStars />
          <p>Create a new projects</p>
        </button>
      </div>
    </div>
  );
}

function NumResults({ projects }) {
  return (
    <div className="nav-info">
      <h2>Personal Projects</h2>
      <p>
        <strong className="myStrongText">
          {projects ? projects.length : 0}
        </strong>{" "}
        Projects Created
      </p>
    </div>
  );
}
