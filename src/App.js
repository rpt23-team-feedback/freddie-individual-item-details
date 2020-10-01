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

  componentDidMount() {
    axios.get('http://localhost:3000/games')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    })
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

