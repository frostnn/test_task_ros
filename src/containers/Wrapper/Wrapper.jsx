import PeoplePage from '../PeoplePage/PeoplePage';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <PeoplePage />
    </div>
  );
};

export default Wrapper;
