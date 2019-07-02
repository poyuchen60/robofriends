import {
  SEARCH_FIELD_CHANGE,
  ROBOTS_FETCH_PEDDING,
  ROBOTS_FETCH_SUCCESS,
  ROBOTS_FETCH_ERROR
} from "./constants";

const initialState = {
  searchField: ''
}

const searchField = (state=initialState, action={}) => {
  switch(action.type) {
    case SEARCH_FIELD_CHANGE:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}

const initialStateRobots = {
  robots: [],
  isPedding: false
}

const robotsFetch = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case ROBOTS_FETCH_PEDDING:
      return { ...state, isPedding: true };
    case ROBOTS_FETCH_SUCCESS:
      return { ...state, isPedding: false, robots: action.payload };
    case ROBOTS_FETCH_ERROR:
      return { ...state, isPedding: false, error: action.payload };
    default:
      return state;
  }
}

export {
  searchField,
  robotsFetch
}