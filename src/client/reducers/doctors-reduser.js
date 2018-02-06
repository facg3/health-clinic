import {
  DATA_FETCH_START,
  DATA_FETCH_FAILURE,
  DATA_FETCH_SUCCESS
} from '../constants/actionTypesDoctor';

const initialState = {
  data: [],
  error: undefined,
  isFetching: false
};

const data = (state = initialState , action) => {
  switch (action.type) {
    case DATA_FETCH_START: {
      return {
        ...state,
        error: undefined,
        isFetching: true
      };
    }

    case DATA_FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    }

    case DATA_FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    }

    default:
      return state;

  }
};

export default data;
