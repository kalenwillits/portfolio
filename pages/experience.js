import Layout from "../components/Layout";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../data/experience";

const Experience = () => {
    return (
      <Layout activeTab="Experience">
        <div className="md:mt-10">
          {experience.map((item, index) => (
            <>
            <div className={index > 0 ? "mt-4" : ""}></div>
            <ExperienceCard data={item}/>
            </>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Experience;
