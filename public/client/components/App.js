import React from "react";
import "../App.css";
import {hot} from 'react-hot-loader';
import GamesList from './GamesList';
const axios = require('axios');


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      games: this.props.exampleData
    }
  }

  render(){
    console.log(this.state.games);
    return(
      <div className="App">
        <div>
          <GamesList games={this.state.games}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);

