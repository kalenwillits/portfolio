import { useRouter } from "next/router";
import { tabs } from "../data/tabs";
import {
  HomeIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  ChatAltIcon,
  NewspaperIcon,
} from '@heroicons/react/solid'

const Header = ({activeTab}) => {
  const router = useRouter();
  const name = "Kalen Willits";

  const useIcon = (icon) => {
    switch (icon) {
      case "Home":
        return (<HomeIcon className="mx-2 w-5 h-5"/>);
      case "AcademicCap":
        return (<AcademicCapIcon className="mx-2 w-5 h-5"/>);
      case "PaperAirplane":
        return (<PaperAirplaneIcon className="mx-2 w-5 h-5"/>);
      case "ChatAlt":
        return (<ChatAltIcon className="mx-2 w-5 h-5"/>);
      case "Newspaper":
        return (<NewspaperIcon className="mx-2 w-5 h-5"/>);
      default:
        return (<></>);
    }
  };
    return (
      <>
      <div className="flex fixed top-0 z-10 justify-between p-4 w-screen border-b bg-zinc-900">
          {tabs.map((tab, index) => (
              <div
                className={activeTab === tab.title ? "border-b" : ""}
                key={`tab-${index}`}
              >
                <button
                  className="text-gray-300 rounded-lg hover:text-white"
                  onClick={() => router.push(tab.url)}>
                  <div className="flex mx-4 items-center">
                    {useIcon(tab.icon)}
                    <p className="hidden md:block">{tab.title}</p>
                  </div>
                </button>
              </div>
            )
          )}
        </div>
      <div className="block flex justify-center mt-4 text-lg text-white md:hidden">
        {activeTab}
      </div>
      </>
    );
  };

export default Header;
