import React, { Component } from 'react';
import './App.css';
import Circles from '../src/Components/Circles/Circles'
import CircleSelector from '../src/Components/CircleSelector/CircleSelector'


class App extends Component {
  constructor(){
    super()
      this.state = {
        selected: true && '1',
      }
  }

  changeClass = (selected) =>{
    this.setState({
      selected: selected
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            selected={this.state.selected}
            onChange={this.changeClass}
          />
          <Circles 
            selected={this.state.selected}
          />

        </main>
      </div>
    );
  }
}

export default App;
