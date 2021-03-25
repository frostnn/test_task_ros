import SearchInput from '../../components/Search/SearchInput';
import SortBtn from '../../components/Search/SortBtn';
import styles from './SearchPanel.module.scss';

const SearchPanel = () => {
  return (
    <div className={styles.searchPanel_wrapper}>
      <SearchInput />
      <SortBtn />
    </div>
  );
};

export default SearchPanel;
