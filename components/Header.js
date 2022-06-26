import { useRouter } from "next/router";
import { tabs } from "../data/tabs";

const Header = () => {
  const router = useRouter();
  const name = "KALEN WILLITS";

    return (
      <div className="w-screen sticky flex justify-between border-b">
        <div className="w-full px-4 pt-4 text-white text-xl">
          {name}
        </div>
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
