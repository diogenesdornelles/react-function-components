import generalActions from '../actions/generalActions';

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case generalActions.parte: {
      const { payload } = action;
      return {
        ...state,
        parte: payload,
      };
    }
    case generalActions.number: {
      const { payload } = action;
      return {
        ...state,
        number: payload,
      };
    }
    case generalActions.register: {
      const { payload } = action;
      return {
        ...state,
        register: payload,
      };
    }
    case generalActions.difficulty: {
      const { payload } = action;
      return {
        ...state,
        difficulty: payload,
      };
    }
  }
  return { ...state };
};
