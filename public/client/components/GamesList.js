import React from 'react';
import GamesListItem from './GamesListItem';

const GamesList = (props) => (
  <div>
    {props.gameCount.map((game) => {
      return <GamesListItem game={game} key={game} handleGameClick={props.handleGameClick} games={props.games}/>
    })}
  </div>
);

export default GamesList;
