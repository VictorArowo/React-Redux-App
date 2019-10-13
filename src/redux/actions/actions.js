import { SET_DATE, FETCH_DATA_START, FETCH_DATA_SUCCESS } from '../types';
import store from '../store';
import Axios from 'axios';

export const setDate = date => {
  return {
    type: SET_DATE,
    payload: date
  };
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  Axios.get(store.getState().data.url)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: err });
    });
};
