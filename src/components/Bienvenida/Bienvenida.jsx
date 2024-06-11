/* imports */
import avatar from "../../../assets/avatar.png";
import styles from "./Bienvenida.module.css"

export const Bienvenida = () => {
  return (
  <section className={styles.container}>
    <div className={styles.contenido}>
        <h1 className={styles.title}>Hola, Soy Marcelo Nicolas Villalba</h1>
        <p className={styles.descripcion}>Soy estudiante de Ingeniería de Software y desarrollador full-stack con conocimientos en frontend, backend y desarrollo móvil.</p>
        <a href="mailto:marcelonv011@gmail.com" className={styles.contactame}>Contactame</a>
    </div>
    <img src={avatar} alt="avatar" className={styles.avatar}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  );
}
