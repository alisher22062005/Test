import styles from "./Card.module.css";
import icon from "../../assets/def.jpg";
export default function ActionAreaCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={icon} alt="Img.."></img>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
