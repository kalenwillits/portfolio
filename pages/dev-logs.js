import Layout from "../components/Layout";
import DevLogCard from "../components/DevLogCard";
import { devLogs } from "../data/devLogs";

const DevLogs = () => {
    return (
      <Layout activeTab="DevLogs">
        <div className="md:mt-10">
          {devLogs.map((item, index) => (
            <DevLogCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default DevLogs;
