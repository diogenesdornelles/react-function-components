import { useEffect } from 'react';

const useSaveState = (key, value) => {
  useEffect(() => {
    localStorage[key] = JSON.stringify(value);
  }, [value, key]);
};

export default useSaveState;
