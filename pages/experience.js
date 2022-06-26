import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { experience } from "../data/experience";

const Experience = () => {
    return (
      <Layout>
        <div className="">
          {experience.map((item, index) => (
            <BlogCard key={index} data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Experience;
