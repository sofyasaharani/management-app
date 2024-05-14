/** @format */

import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function FormNewProject() {
  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // State to store the selected thumbnail file
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]); // Update the thumbnail state when a file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const formData = new FormData();
    formData.append("project_name", projectName);
    formData.append("user_id", "user-id");
    formData.append("thumbnail", thumbnail);
    formData.append("description", description);

    const response = await fetch("/api/projects", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: ` Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setProjectName("");
      setThumbnail(null);
      setDescription("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_PROJECT", payload: json });
      navigate("/");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Project</h1>
        <input
          type="text"
          name="project_name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className={emptyFields.includes("projectName") ? "error" : ""}
          placeholder="Project Name"
        />

        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
          className={emptyFields.includes("thumbnail") ? "error" : ""}
          accept="image/*"
        />

        <input
          name="description"
          value={description}
          className={emptyFields.includes("description") ? "error" : ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <button type="submit">Add Project</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
