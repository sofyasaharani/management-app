/** @format */

import { BsThreeDotsVertical } from "react-icons/bs";
import "../styles/CardList.css";
import img from "../assets/avatar.jpg";
// import { useProjectsContext } from "../hooks/useProjectsContext";
// import { useAuthContext } from "../hooks/useAuthContext";

// date fns
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function CardList({ projects }) {
  return (
    <div className="card-container">
      {projects &&
        projects.map((project) => (
          <div className="card" key={project._id}>
            <div className="picture">
              <img src={img} alt="Project Thumbnail" />
              {/* <img
                src={project.path_to_thumbnail_photo}
                alt="Project Thumbnail"
              /> */}
            </div>
            <div className="card-content">
              <h1>{project.project_name}</h1>
              <p>{project.description}</p>
              <div className="user-info">
                {/* If you have a user avatar, you can display it here */}
                {/* <img src={project.user_avatar} alt="User Avatar" /> */}
                <p>{project.createdAt}</p>
                <a className="button">
                  <BsThreeDotsVertical />
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
