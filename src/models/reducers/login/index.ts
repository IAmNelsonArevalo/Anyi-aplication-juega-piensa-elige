import createReducer from '../createReducer';
import {LOGIN} from '../../../types/index';

const useLoginReducers = () => {
  const login = createReducer(
    {
      token: '',
      user: {},
      fullname: '',
    },
    {
      [LOGIN](state: any, action: any) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  );

  const level1 = createReducer(
    {level1: false},
    {
      SET_LEVEL1(state: any, action: any) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  );

  const levels = createReducer(
    {level2: false, level3: false},
    {
      SET_LEVELS(state: any, action: any) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  );

  return {
    login,
    level1,
    levels
  };
};

export default useLoginReducers;
