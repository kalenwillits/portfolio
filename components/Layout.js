import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head';

const Layout = ({children, activeTab}) => {
  return (
    <div className="py-12 w-screen h-screen bg-zinc-900 overflow-x-hidden">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header activeTab={activeTab}/>
      <div className="px-14 pt-4">
      {children}
    </div>
    <div className="my-10">
      <Footer />
    </div>
    </div>
  )
};

export default Layout;
