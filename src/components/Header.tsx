import React from "react";
import styles from "./Header.module.css";

const MenuConfig = [
 { title: "Info", key: "menu_1" },
 { title: "Career", key: "menu_2" },
 { title: "Projects", key: "menu_3" },
 { title: "Contact", key: "menu_4" },
];

const Header = () => {
 return (
  <div className=" p-1">
   <header className="flex  items-center ">
    <div className="flex-1 text-lg font-semibold">Hye Jin's Port Folio</div>
    <nav className="flex-2">
     <ul className="flex justify-between">
      {MenuConfig.map((menu) => (
       <li className="flex justify-center flex-1" key={menu.key}>
        <button className={styles.gnb}>
         <span className={styles.text}>{menu.title}</span>
         <span className={styles.masker}>
          <span>{menu.title}</span>
         </span>
        </button>
       </li>
      ))}
     </ul>
    </nav>
   </header>
  </div>
 );
};

export default Header;
