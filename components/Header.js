import { useRouter } from "next/router";
import { tabs } from "../data/tabs";
import { HomeIcon, AcademicCapIcon, PaperAirplaneIcon, ChatAltIcon } from '@heroicons/react/solid'

const Header = () => {
  const router = useRouter();
  const name = "KALEN WILLITS";

  const useIcon = (icon) => {
    switch (icon) {
      case "AcademicCap":
        return (<AcademicCapIcon className="h-5 w-5 mx-2"/>);
      case "PaperAirplane":
        return (<PaperAirplaneIcon className="h-5 w-5 mx-2"/>);
      case "ChatAlt":
        return (<ChatAltIcon className="h-5 w-5 mx-2"/>);
      default:
        return (<></>);
    }
  };
    return (
      <div className="w-screen sticky flex justify-between border-b p-4">
        <button
        className="flex rounded-lg w-1/6 text-gray-300 hover:text-white"
          onClick={() => router.push("/")}
        >
          <HomeIcon className="h-5 w-5 mx-2"/>
          {name}
        </button>
        <div className="w-full flex justify-evenly text-white">
          {tabs.map(
            (
              tab,
              index
            ) => (
              <div
                key={`tab-${index}`}
              >
                <button
                  className="text-gray-300 rounded-lg hover:text-white"
                  onClick={() => router.push(tab.url)}>
                  <div className="mx-4 flex">
                    {useIcon(tab.icon)}
                    {" "}{tab.title}{" "}
                  </div>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

export default Header;
