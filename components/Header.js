import { useRouter } from "next/router";
import { tabs } from "../data/tabs";

const Header = () => {
  const router = useRouter();
  const name = "KALEN WILLITS";

    return (
      <div className="w-screen sticky flex justify-between border-b">
        <button
        className="w-1/6 pt-4 text-xl text-gray-300 hover:text-white "
          onClick={() => router.push("/")}
        >
          {name}
        </button>
        <div className="w-full flex justify-evenly px-4 pt-4 text-white">
          {tabs.map(
            (
              tab,
              index
            ) => (
              <div
                key={`tab-${index}`}
              >
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={() => router.push(tab.url)}>
                  <div>
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
