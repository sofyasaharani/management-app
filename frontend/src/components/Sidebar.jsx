/** @format */

import { BsGlobe, BsPerson, BsPlusCircle, BsCreditCard } from "react-icons/bs";
import avatar from "../assets/avatar.jpg";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
  return (
    <nav className="side-bar_container">
      <Profile></Profile>
      <div className="side-bar">
        <div className="projects">
          <p>PROJECTS</p>
          <a href="/personal-project" className="button personal">
            <BsPerson />
            <p>Personal Projects</p>
          </a>
          <a href="/community-project" className="button community">
            <BsGlobe />
            <p>Community Projects</p>
          </a>
          <Link to="/new-project" className="button project">
            <BsPlusCircle />
            <p>Create a new projects</p>
          </Link>
        </div>
        <div className="general">
          <p>General</p>
          <a href="/billing" className="button billing">
            <BsCreditCard />
            <p>Billing</p>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Profile() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <img src={avatar} alt="Project" />
        {user && (
          <div className="profile-content">
            <h1>{user.email}</h1>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
}
