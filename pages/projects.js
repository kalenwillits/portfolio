import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
    return (
      <Layout activeTab="Projects">
        <div className="md:mt-10">
          {projects.map((item, index) => (
            <ProjectCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Projects;
