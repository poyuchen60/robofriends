import React, { useEffect, useState, useReducer, useMemo } from 'react';
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

  const header = useMemo(() => <h1 className='f1'>RoboFriends</h1>, [])
  const filteredRobots = useMemo(() => robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  }), [robots, searchField])

  const cardList = useMemo(() => <CardList robots={filteredRobots} />, [filteredRobots])
  
  return <div className='tc'>
    { header }
    <button onClick={() => setCount(c => c + 1)} >
      {`Count: ${count}`}
    </button>
    <SearchBox
      searchChange={ event => setSearchField(event.target.value)}
    />
    <Scroll>
      {error
        ? <h1>Error</h1>
        : isPedding ? <h1>Loading</h1> : cardList
      }
    </Scroll>
  </div>
}

export default App;