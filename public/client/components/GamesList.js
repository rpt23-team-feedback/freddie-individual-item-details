import React from 'react';
import GamesListItem from './GamesListItem';

const GamesList = (props) => (
  <div>
    {props.games.map((game) => {
      console.log(game);
      return <GamesListItem game={game} key={game.gameId}/>
    })}
  </div>
);

export default GamesList;