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
        return (<HomeIcon className="h-5 w-5 mx-2"/>);
      case "AcademicCap":
        return (<AcademicCapIcon className="h-5 w-5 mx-2"/>);
      case "PaperAirplane":
        return (<PaperAirplaneIcon className="h-5 w-5 mx-2"/>);
      case "ChatAlt":
        return (<ChatAltIcon className="h-5 w-5 mx-2"/>);
      case "Newspaper":
        return (<NewspaperIcon className="h-5 w-5 mx-2"/>);
      default:
        return (<></>);
    }
  };
    return (
      <>
      <div className="w-screen fixed top-0 flex justify-between border-b p-4 bg-zinc-900 z-10">
          {tabs.map((tab, index) => (
              <div
                className={activeTab === tab.title ? "border-b" : ""}
                key={`tab-${index}`}
              >
                <button
                  className="text-gray-300 rounded-lg hover:text-white"
                  onClick={() => router.push(tab.url)}>
                  <div className="mx-4 flex">
                    {useIcon(tab.icon)}
                    <p className="hidden md:block">{tab.title}</p>
                  </div>
                </button>
              </div>
            )
          )}
        </div>
      <div className="flex mt-4 justify-center block md:hidden text-white text-2xl">
        {activeTab}
      </div>
      </>
    );
  };

export default Header;
