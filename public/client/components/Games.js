import React from "react";
import "../App.css";
import {hot} from 'react-hot-loader';
import GamesList from './GamesList';
const axios = require('axios');

class Games extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      gameCount: [1, 2, 3],
      gameShown: {}
    }
    this.handleGameClick = this.handleGameClick.bind(this);
  }
  // this function will be called on Mark's service when a user clicks on a game item within a tier
  handleGameClick(gameId) {
    return axios.get(`http://localhost:3200/games/single/${gameId}`)
    .then((results) => {
      let gameData = results.data;
      this.setState(() => {
        return {
          games: this.state.games.concat(gameData),
          gameShown: gameData
        }
      })
      return results.data;
    });
  }


  render(){
    return(
      <div className="App">
        <div>
          <GamesList gameCount={this.state.gameCount} handleGameClick={this.handleGameClick} games={this.state.games}/>
        </div>
        <div>
          <div>
            <img src={this.state.gameShown.photo_url} class='photo'></img>
            <video src={this.state.gameShown.video_url} width='200' height='200' type='video/mp4' class='video' controls></video>
            <p>{this.state.gameShown.name}</p>
            <p>{this.state.gameShown.creators}</p>
            <p>{this.state.gameShown.os_options}</p>
            <p>{this.state.gameShown.description}</p>
            <p>{this.state.gameShown.key_features}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Games);

