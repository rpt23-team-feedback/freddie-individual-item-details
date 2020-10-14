import React from 'react';

const GamesListItem = (props) => (
  <div>
    <div>
      {/* expand into hosted video */}
      {props.game.video_url}
    </div>
    <div>
      {/* biggest font size in module, bold, font color is white */}
      <span>{props.game.name}</span>
    </div>
    <div>
      {/* font color orange and underlined */}
      <span>{props.game.creators}</span>
    </div>
    <div>
      {/* create icon box for os platforms */}
      <span>{props.game.os_options}</span>
    </div>
    <div>
      <p>{props.game.description}</p>
    </div>
    <div>
      {/* Key Features is bold and font color is white */}
      Key Features
      <ul>
        {props.game.key_features.map((feature, idx) => <li key={idx}>{feature}</li> )}
      </ul>
    </div>
  </div>
);

export default GamesListItem;