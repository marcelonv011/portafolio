import styles from "./Navbar.module.css";
import { useState } from "react";
import menuIcon from "../../../assets/menuIcon.png"; // Importación directa
import closeIcon from "../../../assets/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portafolio</a>
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={
            menuOpen
            ? closeIcon
            : menuIcon
          } 
          alt="Menu Icon" 
          onClick={() => setMenuOpen(!menuOpen)}
        /> {/* Usar la imagen importada */}
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">Acerca de mí</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
