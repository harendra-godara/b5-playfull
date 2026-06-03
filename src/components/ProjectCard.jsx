function ProjectCard({ user, projects }) {
  return (
    <div className="w-full max-w-4xl mt-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
        {user}'s Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">💻</span>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Project #{index + 1}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {project}
            </h3>

            <p className="text-gray-500">A cool project built by {user}.</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transition">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
