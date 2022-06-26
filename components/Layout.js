import Header from "../components/Header";

const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <Header/>
      <div className="px-10 pt-4">
      {children}
    </div>
    </div>
  )
};

export default Layout;
