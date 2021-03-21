import styles from './SortBtn.module.scss';

const SortBtn = ({ sortName }) => {
  return (
    <button className={styles.sort_btn} onClick={() => sortName()}>
      Sort Name
    </button>
  );
};

export default SortBtn;
