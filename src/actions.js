import {
  SEARCH_FIELD_CHANGE,
  ROBOTS_FETCH_PEDDING,
  ROBOTS_FETCH_SUCCESS,
  ROBOTS_FETCH_ERROR
} from "./constants";

const setSearchField = (text) => ({
  type: SEARCH_FIELD_CHANGE,
  payload: text
})

const fetchRobots = () => dispatch => {
  dispatch({type: ROBOTS_FETCH_PEDDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({type: ROBOTS_FETCH_SUCCESS, payload: users}))
    .catch(err => dispatch({type: ROBOTS_FETCH_ERROR, payload: err}))
}

export {
  setSearchField,
  fetchRobots
}