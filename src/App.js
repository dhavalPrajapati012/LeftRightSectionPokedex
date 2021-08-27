import React, { Component } from 'react'
import './App.css'
import Left from './Left'
import Right from './Right'

class App extends Component {
  constructor() {
    super()
    this.state = {
      left:
        [
          { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
          { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
          { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
          { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
          { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
          { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
          { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
          { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ],
      right: []
    }
  }
  handleClick = (id) => {
    let data = this.state.left.filter(pokeId => pokeId.id === id)[0];
    let noData = this.state.left.filter(pokeId => pokeId.id !== id);
    let rightData = this.state.right
    rightData.push(data);
    this.setState({
      right: rightData,
      left: noData
    })
  }

  handleRightClick = (id) => {
    let data = this.state.right.filter(pokeId => pokeId.id === id)[0];
    let noData = this.state.right.filter(pokeId => pokeId.id !== id);
    let leftData = this.state.left;
    leftData.push(data);
    this.setState({
      left: leftData,
      right: noData
    })

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 right-border">
            <h2 className="head">Pokedex Left Section</h2>
          </div>
          <div className="col-lg-6">
            <h2 className="head">Pokedex Right Section</h2>
          </div>
        </div>
        <div className="row">
          <div className="section col-lg-6 right-border">
            {this.state.left.map((val) => (
              <Left id={val.id} name={val.name} type={val.type} exp={val.base_experience} onClick={(id) => this.handleClick(id)} />
            ))}
          </div>
          <div className="section col-lg-6">
            {this.state.right.map((val) => (
              <Right id={val.id} name={val.name} type={val.type} exp={val.base_experience} onClick={(id) => this.handleRightClick(id)} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
