import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { projects } from "../data/projects";

const Projects = () => {
    return (
      <Layout>
        <div className="">
          {projects.map((item, index) => (
            <BlogCard key={index} data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Projects;
