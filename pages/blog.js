import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const Blog = () => {
    return (
      <Layout activeTab="Blog">
        <div className="md:mt-10">
          {blogs.map((item, index) => (
            <BlogCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Blog;
