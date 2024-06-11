/* imports */
import avat from "../../../assets/avat.png";
import cursorIcon from "../../../assets/cursorIcon.png";
import serverIcon from "../../../assets/serverIcon.png";
import uiIcon from "../../../assets/uiIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>Acerca de mí</h2>
        <div className={styles.content}>
            <img src={avat} alt="avatar2" className={styles.avatar}/>
            <ul className={styles.aboutitems}>
                <li className={styles.aboutitem}>
                    <img src={cursorIcon} alt="cursor"/>
                    <div className={styles.aboutitemText}>
                        <h3> Frontend Developer (incluyendo desarrollo móvil) </h3>
                        <p>Como desarrollador front-end, poseo experiencia y conocimiento en diversas tecnologías y frameworks modernos como React, Vue y Angular, además de haber trabajado en el desarrollo de aplicaciones móviles utilizando herramientas como React Native.</p>
                    </div>
                </li>
                <li className={styles.aboutitem}>
                    <img src={serverIcon} alt="server"/>
                    <div className={styles.aboutitemText}>
                        <h3> Backend Developer</h3>
                        <p>Como desarrollador back-end, tengo experiencia y conocimiento en tecnologías y frameworks modernos como Java con Spring Boot. Además, estoy familiarizado con herramientas como Lombok para la simplificación del código, Flyway Migration para el manejo de migraciones de base de datos y Spring Security para la seguridad de la aplicación.</p>
                    </div>
                </li>
                <li className={styles.aboutitem}>
                    <img src={uiIcon} alt="testing"/>
                    <div className={styles.aboutitemText}>
                        <h3> Tecnologías, Herramientas y Testing </h3>
                        <p>Estoy familiarizado con herramientas como Git y GitHub para el control de versiones y la colaboración en proyectos. También tengo experiencia en el uso de Postman para la prueba de APIs y PostgreSQL para la gestión de bases de datos. Ademas tengo experiencia en pruebas unitarias y de integración utilizando JUnit y Mockito para garantizar la calidad y robustez de mis aplicaciones.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
