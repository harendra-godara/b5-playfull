import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-bold m-4 text-blue-950">Projects</h1>

      <div className="flex gap-2 m-5">
        {Object.keys(projects).map((user) => (
          <button
            key={user}
            onClick={() => setSelectedUser(user)}
            className="bg-blue-300 rounded-2xl p-2 hover:bg-sky-700"
          >
            {user}
          </button>
        ))}
      </div>

      {selectedUser && (
        <ProjectCard user={selectedUser} projects={projects[selectedUser]} />
      )}
    </div>
  );
}

export default Projects;
