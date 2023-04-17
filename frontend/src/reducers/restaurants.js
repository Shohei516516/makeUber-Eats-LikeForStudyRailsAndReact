import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: 'REQUEST_STATE.INITIAL',
  restaurantsList: [],
};

export const restaurantsActiontyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case restaurantsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_LOADING,
      };
    case restaurantsActionTyps.FETCHING_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
}
