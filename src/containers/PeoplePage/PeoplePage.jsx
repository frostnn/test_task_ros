import { URL_API } from '../../constants/constants';
import { getApiResource } from '../../utils/network.js';
import styles from './PeoplePage.module.scss';
import Cards from '../../components/PeoplePage/Cards';
import { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc/withErrorApi';
import SearchPanel from '../../containers/SearchPanel';
import Loader from '../../components/Loader/Loader';

const PeoplePage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState(true);

  const getResurse = async (URL_API) => {
    const { data } = await getApiResource(URL_API);
    if (data) {
      setIsLoading(false);
      setState(data);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const sortName = () => {
    console.log(sort);
    const copyState = [...state];
    if (setSort(!sort)) {
      copyState.sort((a, b) => {
        return a.first_name > b.first_name ? 1 : -1;
      });
    } else {
      copyState.reverse((a, b) => {
        return a.first_name > b.first_name ? 1 : -1;
      });

      return setState(copyState);
    }
  };

  useEffect(() => {
    getResurse(URL_API);
  }, []);

  return (
    <>
      <SearchPanel
        setInputSearchValue={setInputSearchValue}
        sortName={sortName}
      />
      <div className={styles.cards_block}>
        {isLoading ? (
          <Loader />
        ) : (
          state && <Cards state={state} inputSearchValue={inputSearchValue} />
        )}
      </div>
    </>
  );
};

export default withErrorApi(PeoplePage);
