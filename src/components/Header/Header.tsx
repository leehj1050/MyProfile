import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const MenuConfig = [
  { title: "About", key: "menu_1", hrefId: "#about" },
  { title: "Career", key: "menu_2", hrefId: "#career" },
  { title: "Projects", key: "menu_3", hrefId: "#projects" },
  { title: "Contact", key: "menu_4", hrefId: "#contact" },
];

const Header = () => {
  return (
    <div className=" p-1 fixed w-full ">
      <header className="flex  items-center ">
        <div className="flex-1 text-lg font-semibold cursor-pointer">Hye Jin's Port Folio</div>
        <nav className="flex-2">
          <ul className="flex justify-between">
            {MenuConfig.map((menu) => (
              <li className="flex justify-center flex-1" key={menu.key}>
                <Link href={menu.hrefId} className="group" >{/** 호버감지용 */}
                  <span className=" text-[18px] font-[600] after:content-[''] after:block after:w-[0%] after:h-[2px] after:bg-white after:mt-[5px] after:transition-all after:duration-300
                     group-hover:after:w-full">{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
