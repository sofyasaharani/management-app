/** @format */

/** @format */

import "../styles/Login.css";
import FormNewProject from "../components/FormNewProject";

export default function NewProject() {
  return (
    <div className="Login">
      <div className="container login right-panel-active" id="container">
        <FormNewProject />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Add Project</h1>
              <p>Add your porject here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
