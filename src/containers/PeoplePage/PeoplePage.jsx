import { URL_API } from '../../constants/constants';
import { getApiResource } from '../../utils/network.js';
import styles from './PeoplePage.module.scss';
import Cards from '../../components/Cards';
import { useEffect, useState } from 'react';
const PeoplePage = () => {
  const [state, setState] = useState(null);
  const getResurse = async (url) => {
    const { data } = await getApiResource(url);
    setState(data);
    /*     const peopleList = data.map(({ avatar, first_name, last_name, email }) => {
      return {
        avatar,
        first_name,
        last_name,
        email,
      };
    }); */
  };

  useEffect(() => {
    getResurse(URL_API);
  }, []);
  return (
    <div className={styles.wrapper}>
      {state &&
        state.map(({ avatar, first_name, last_name, email, id }) => {
          return (
            <Cards
              avatar={avatar}
              first_name={first_name}
              last_name={last_name}
              email={email}
              key={id}
            />
          );
        })}
    </div>
  );
};

export default PeoplePage;
