import { useContext } from 'react';
import { Context } from '../../../context/context';
import styles from './SearchInput.module.scss';

const SearchInput = () => {
  const { setInputSearchValue } = useContext(Context);
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Please enter a name to search..."
      type="text"
      onChange={(e) => setInputSearchValue(e.target.value)}
    />
  );
};

export default SearchInput;
