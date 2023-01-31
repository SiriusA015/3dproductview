// src/App.js 
import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      optionNames: [ 'frame', 'seat', 'waterbottle', 'handlebars' ],   
      optionValues: [
        [ 'white', 'red', 'blue', 'green' ],
        [ 'grey', 'white', 'black' ],
        [ 'grey', 'white', 'black' ],
        [ 'grey', 'white', 'black' ]
      ]
    }
  }

  render() {
    return (
      <div className="App">                
        Hello 
      </div>
    )
  }
}

export default App
