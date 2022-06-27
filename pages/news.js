import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import { news } from "../data/news";

const News = () => {
    return (
      <Layout activeTab="News">
        <div className="md:mt-10">
          {news.map((item, index) => (
            <NewsCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default News;
