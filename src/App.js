import React from "react";
import "./App.css";
import {hot} from 'react-hot-loader';
const axios = require('axios');


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);

