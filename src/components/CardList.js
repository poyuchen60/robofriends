import React, { useState, useEffect, memo } from 'react';
import Card from './Card';

const CardList = ({ robots, searchField }) => {
  const [ filteredRobots, setFilteredRobots ] = useState(robots);
  useEffect(() => {
    const filtered = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredRobots(filtered)
  }, [searchField, robots]);

  return (
    <div>
      {
        filteredRobots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  );
}

export default memo(CardList);