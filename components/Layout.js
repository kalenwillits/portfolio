import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({children, activeTab}) => {
  return (
    <div className="overflow-x-hidden py-12 w-screen h-screen bg-zinc-900 break-words">
      <Header activeTab={activeTab}/>
      <div className="px-4 md:px-16 pt-4">
      {children}
    </div>
    <div className="my-10">
      <Footer />
    </div>
    </div>
  )
};

export default Layout;
