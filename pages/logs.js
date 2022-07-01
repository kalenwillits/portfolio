import Layout from "../components/Layout";
import LogCard from "../components/DevLogCard";
import { devLogs } from "../data/devLogs";

const Logs = () => {
    return (
      <Layout activeTab="Logs">
        <div className="md:mt-10">
          {devLogs.map((item, index) => (
            <DevLogCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Logs;
