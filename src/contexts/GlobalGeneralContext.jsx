import React, { createContext, useReducer } from 'react';
import { globalGeneralState } from '../states/globalGeneralState';
import { reducer } from '../reducers/generalReducer';
import proptypes from 'prop-types';
import useSaveState from '../customHooks/useSaveState';
export const GlobalGeneralContext = createContext();

export const GeneralContext = ({ children }) => {
  const [contextGeneralState, dispatchGeneralState] = useReducer(
    reducer,
    globalGeneralState,
  );
  useSaveState('contextGeneralState', contextGeneralState);
  return (
    <GlobalGeneralContext.Provider
      value={{ contextGeneralState, dispatchGeneralState }}
    >
      {children}
    </GlobalGeneralContext.Provider>
  );
};

GeneralContext.propTypes = {
  children: proptypes.node,
};
