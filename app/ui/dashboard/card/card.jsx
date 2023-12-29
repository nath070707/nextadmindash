import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}></span>
        <span className={styles.number}></span>
        <span className={styles.detail}>
          <span className={styles.positive}>
          </span> 
        </span>
      </div>
    </div>
  );
};

export default Card;