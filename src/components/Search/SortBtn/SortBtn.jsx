import styles from './SortBtn.module.scss';
import { useContext } from 'react';
import { Context } from '../../../context/context';
const SortBtn = () => {
  const { sortName } = useContext(Context);
  return (
    <button className={styles.sort_btn} onClick={() => sortName()}>
      Sort Name
    </button>
  );
};

export default SortBtn;
