import { useState } from 'react';
import Error from '../components/Error';

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? <Error /> : <View setErrorApi={setErrorApi} {...props} />}
      </>
    );
  };
};
