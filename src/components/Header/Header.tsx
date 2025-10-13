import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const MenuConfig = [
 { title: "About", key: "menu_1" , hrefId:"#about"},
 { title: "Career", key: "menu_2" ,hrefId:"#career" },
 { title: "Projects", key: "menu_3", hrefId:"#projects" },
 { title: "Contact", key: "menu_4" , hrefId:"#contact"},
];

const Header = () => {
 return (
  <div className=" p-1 fixed w-full bg-black">
   <header className="flex  items-center ">
    <div className="flex-1 text-lg font-semibold cursor-pointer">Hye Jin's Port Folio</div>
    <nav className="flex-2">
     <ul className="flex justify-between">
      {MenuConfig.map((menu) => (
       <li className="flex justify-center flex-1" key={menu.key}>
        <Link href={menu.hrefId} className={styles.gnb}>
         <span className={styles.text}>{menu.title}</span>
         <span className={styles.masker}>
          <span>{menu.title}</span>
         </span>
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
