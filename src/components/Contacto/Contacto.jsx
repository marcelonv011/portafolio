import styles from "./Contacto.module.css";
import { getImageUrl } from "../../utils";

export const Contacto = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contactamé</h2>
        <p>No dudes en comunicarte!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:marcelonv011@gmail.com">marcelonv011@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/marcelo-nicolas-villalba-83bb16269/">linkedin.com/marcelo-villalba</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/marcelonv011">github.com/marcelonv011</a>
        </li>
      </ul>
    </footer>
  );
};