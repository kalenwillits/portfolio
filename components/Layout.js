import Header from "../components/Header";

const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen bg-zinc-900 overflow-hidden">
      <Header/>
      <div className="px-14 pt-4">
      {children}
    </div>
    </div>
  )
};

export default Layout;
