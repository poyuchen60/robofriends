import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {
  setSearchField,
  fetchRobots
} from '../actions'

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  searchField: state.searchField.searchField,
  isPedding: state.robotsFetch.isPedding,
  robots: state.robotsFetch.robots,
  error: state.robotsFetch.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onFetchRobots: () => dispatch(fetchRobots()),
})

class App extends Component {

  componentDidMount() {
    this.props.onFetchRobots();
  }


  render() {
    const {
      searchField, onSearchChange,
      robots, isPedding, error
    } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPedding ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            {error
              ? <h1>Error</h1>
              : <CardList robots={filteredRobots}/>
            }
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);