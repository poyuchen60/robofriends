import React, { useEffect, useState, useReducer, memo } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {
  ROBOTS_FETCH_PEDDING,
  ROBOTS_FETCH_SUCCESS,
  ROBOTS_FETCH_ERROR
} from "../constants";

const robotsFetch = (state, action={}) => {
  console.log(action.type);
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

const fetchRobots = async (dispatch) => {
  dispatch({type: ROBOTS_FETCH_PEDDING});
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    dispatch({type: ROBOTS_FETCH_SUCCESS, payload: users})
  } catch(err) {
    dispatch({type: ROBOTS_FETCH_ERROR, payload: err})
  }
}

const Header = memo(() => <h1 className='f1'>RoboFriends</h1>)

const App = () => {
  const [ searchField, setSearchField ] = useState('');
  const [ count, setCount ] = useState(0);
  const [ { robots, isPedding, error }, dispatch ] = useReducer(
    robotsFetch,
    {
      isPedding: false,
      robots: [],
      error: ''
    }
  )
  useEffect(() => {
    fetchRobots(dispatch);
  }, [])

  // const filteredRobots = robots.filter(robot =>{
  //   return robot.name.toLowerCase().includes(searchField.toLowerCase());
  // })
  
  return isPedding ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <Header />
        <button onClick={() => setCount(c => c + 1)} >
          {`Count: ${count}`}
        </button>
        <SearchBox
          searchChange={ event => setSearchField(event.target.value)}
        />
        <Scroll>
          {error
            ? <h1>Error</h1>
            : <CardList robots={robots} searchField={searchField} />
          }
        </Scroll>
      </div>
    );
}

export default App;