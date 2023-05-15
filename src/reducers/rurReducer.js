import rurActions from '../actions/rurActions';

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case rurActions.deposited: {
      const { payload } = action;
      return {
        ...state,
        depositedPeriod: payload,
      };
    }
    case rurActions.periods: {
      const {
        payload: { periods, unfeasiblesByAge },
      } = action;
      return {
        ...state,
        periods,
        unfeasiblesByAge,
      };
    }
    case rurActions.birth: {
      const {
        payload: { birth, birthLimits },
      } = action;
      return {
        ...state,
        birth,
        birthLimits,
      };
    }
    case rurActions.openRurOptions: {
      return {
        ...state,
        isOpenRurOptions: !state.isOpenRurOptions,
      };
    }
    case rurActions.evidences: {
      const { payload } = action;
      return {
        ...state,
        payload,
      };
    }
  }
  return { ...state };
};
