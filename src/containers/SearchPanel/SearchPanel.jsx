import Search from '../../components/Search/SearchInput/SearchInput';
import SortBtn from '../../components/Search/SortBtn';
import styles from './SearchPanel.module.scss';

const SearchPanel = ({ sortName, setInputSearchValue }) => {
  return (
    <div className={styles.searchPanel_wrapper}>
      <Search setInputSearchValue={setInputSearchValue} />
      <SortBtn sortName={sortName} />
    </div>
  );
};

export default SearchPanel;
