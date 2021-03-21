import styles from './App.module.scss';
import Wrapper from '../Wrapper';
import Title from '../../components/Title';

const App = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Wrapper />
    </div>
  );
};

export default App;
