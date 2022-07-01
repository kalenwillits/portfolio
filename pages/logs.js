import Layout from "../components/Layout";
import LogCard from "../components/LogCard";
import { logs } from "../data/logs";

const Logs = () => {
    return (
      <Layout activeTab="Logs">
        <div className="md:mt-10">
          {logs.map((item, index) => (
            <>
              <div className={index > 0 ? "mt-4" : ""}></div>
              <LogCard data={item}/>
            </>
            )
          )}
        </div>
      </Layout>
    );
  };

export default Logs;
