import Funcard from "../Funcard";
import Skills from "../Skills";
import Projects from "./Projects";

function Home({ projects, friends }) {
  return (
    <div className="min-h-screen  from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Welcome to Friends Hub
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore funny skills, unique personalities, and awesome projects
          created by our gang.
        </p>
      </section>

      {/* Fun Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <Funcard />
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Friends Skills
          </h2>

          <Skills friends={friends} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Projects Showcase
          </h2>

          <Projects projects={projects} />
        </div>
      </section>
    </div>
  );
}

export default Home;
