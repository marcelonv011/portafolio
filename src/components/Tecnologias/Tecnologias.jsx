/* imports */
import styles from "./Tecnologias.module.css"
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../../utils";

export const Tecnologias = () => {
  return (
    <section className={styles.container} id="tecnologias">
        <h2 className={styles.title}>Tecnologias</h2>
        <div className={styles.contenido}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}> 
                            <div className={styles.skillImage}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/> 
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
            </div>
            <ul className={styles.history}>
                {history.map((historyItem, id) => {
                    return <li key={id} className={styles.historyItem}>
                        <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                        />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}`}</h3>
                            <ul>{historyItem.tecnologias.map((tecnologias, id) => {
                                return <li key={id}>{tecnologias}</li>
                            })}</ul>
                        </div>
                    </li>
                })
                }
            </ul>
        </div>
    </section>
  )
}
