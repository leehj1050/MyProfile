'use client'
import React, { useState } from "react";
import Link from "next/link";
import { GoSun } from "react-icons/go";
import { BsMoon } from "react-icons/bs";
import { useDarkMode } from "@/app/contextAPI/useDarkMode";
import { ImEarth } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";

const MenuConfig = [
  { title: "About", key: "menu_1", hrefId: "#about" },
  { title: "Career", key: "menu_2", hrefId: "#career" },
  { title: "Projects", key: "menu_3", hrefId: "#projects" },
  { title: "Contact", key: "menu_4", hrefId: "#contact" },
];

const Header = () => {
  const { isDarkMode, toggleTheme, } = useDarkMode()
  const [isOpenMenu, setIsOpenMenu] = useState(false)


  return (
    <div className={`w-full shadow-md z-10 h-[75px] flex items-center header-bar`} >
      <header className="flex items-center flex-1 p-2 px-[6vw] relative">
        <div className="flex-1 font-semibold cursor-pointer text-sm lg:text-lg xl:text-xl">Hye Jin's Port Folio</div>

        <nav className="hidden lg:flex items-center justify-between flex-3">
          <ul className="flex flex-1">
            {MenuConfig.map((menu) => (
              <li className="flex flex-1" key={menu.key}>
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

          <div className="text-2xl flex gap-2">
            <button onClick={toggleTheme} className="relative w-[24px] h-[24px]">
              {/* 라이트 모드 아이콘 */}
              <BsMoon className="theme-icon theme-icon-moon" />

              {/* 다크 모드 아이콘 */}
              <GoSun className="theme-icon theme-icon-sun " />
            </button>
            <button onClick={() => alert("다국어 설정 준비중(개발중)..")}>
              <ImEarth />
            </button>
          </div>

        </nav>


        {/** 햄버거 메뉴 */}
        <div className="flex items-center lg:hidden">
          <button className="text-2xl" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <BiMenuAltRight />
          </button>

          {isOpenMenu &&
            <div className="z-10 bg-white absolute inset-[0] top-[100%] min-h-[calc(100vh-70px)]">
              <ul className="h-full flex flex-col text-[#171717] justify-center items-center gap-5">
                {MenuConfig.map((menu) => (
                  <li key={menu.key}>
                    <Link href={menu.hrefId} onClick={() => setIsOpenMenu(false)}>
                      <span className="text-[18px] font-[600] hover:text-gray-500">
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </header>


    </div>
  );
};

export default Header;
