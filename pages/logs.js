import Layout from "../components/Layout";
import LogCard from "../components/LogCard";
import { logs } from "../data/logs";

const Logs = () => {
    return (
      <Layout activeTab="Logs">
        <div className="md:mt-10">
          {logs.map((item, index) => (
            <LogCard data={item}/>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Logs;
