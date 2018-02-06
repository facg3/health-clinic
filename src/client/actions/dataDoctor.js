import {
  DATA_FETCH_START,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILURE
} from '../constants/actionTypesDoctor.js';

export const dataFetchStart = () => {
  return {
    type: DATA_FETCH_START
  };
};

export const dataFetchSuccess = payload => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload
  };
};

export const dataFetchFailure = massage => {
  return {
    type: DATA_FETCH_FAILURE,
    payload: massage
  };
};

export const fetchData = () => dispatch => {
  dispatch(dataFetchStart());
  fetch(`/doctors/${cityName}`)
    .then(res => {
      console.log(res);
      if (res.status >= 400) {
        throw new Error('Bad response from sarver');
      }

      return res.json();
    })
    .then(data => dispatch(dataFetchSuccess(data)))
    .catch(err => dispatch(dataFetchFailure(err.massage)));
};
