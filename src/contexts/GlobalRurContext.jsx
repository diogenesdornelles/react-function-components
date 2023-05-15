import React, { createContext, useReducer } from 'react';
import { globalRurState } from '../states/globalRurState';
import { reducer } from '../reducers/rurReducer';
import proptypes from 'prop-types';
import useSaveState from '../customHooks/useSaveState';
export const GlobalRurContext = createContext();

export const RurContext = ({ children }) => {
  const [contextRurState, dispatchRurState] = useReducer(
    reducer,
    globalRurState,
  );
  useSaveState('contextRurState', contextRurState);
  return (
    <GlobalRurContext.Provider value={{ contextRurState, dispatchRurState }}>
      {children}
    </GlobalRurContext.Provider>
  );
};

RurContext.propTypes = {
  children: proptypes.node,
};
