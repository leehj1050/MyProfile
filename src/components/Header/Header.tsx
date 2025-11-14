import React from "react";
import Link from "next/link";
import { GoSun } from "react-icons/go";
import { BsMoon } from "react-icons/bs";
import { useDarkMode } from "@/app/contextAPI/useDarkMode";
import { ImEarth } from "react-icons/im";

const MenuConfig = [
  { title: "About", key: "menu_1", hrefId: "#about" },
  { title: "Career", key: "menu_2", hrefId: "#career" },
  { title: "Projects", key: "menu_3", hrefId: "#projects" },
  { title: "Contact", key: "menu_4", hrefId: "#contact" },
];

const Header = () => {
  const { isDarkMode, toggleTheme } = useDarkMode()

  return (
    <div className={`p-2 px-[6vw] w-full shadow-md  z-10 h-[75px] ${isDarkMode ? "bg-black " : "bg-white"}`}>
      <header className="flex  items-center ">
        <div className="flex-1 text-lg font-semibold cursor-pointer k">Hye Jin's Port Folio</div>
        <nav className="flex-3">
          <ul className="flex justify-between">
            {MenuConfig.map((menu) => (
              <li className="flex justify-end flex-1" key={menu.key}>
                <Link href={menu.hrefId} className="group" >{/** 호버감지용 */}
                  <span
                    className={`text-[18px] font-[600] after:content-[''] after:block after:w-[0%] after:h-[2px] after:mt-[5px] after:transition-all after:duration-300
                     group-hover:after:w-full ${isDarkMode ? "after:bg-white" : "after:bg-[#0a0a0a]"}`}
                  >
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 flex justify-end gap-2 text-2xl">
          <button onClick={toggleTheme}>
            {isDarkMode ? <GoSun /> : <BsMoon />}
          </button>
          <button>
            <ImEarth />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
