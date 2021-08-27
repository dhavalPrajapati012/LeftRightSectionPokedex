import React, { Component } from 'react'
import "./App.css"

class Right extends Component {
    render() {
        const { id, name, type, exp } = this.props
        return (
            <>
                <div className="main" onClick={() => this.props.onClick(id)}>
                    <p className='test'>{name}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Notloaded" />
                    <p>Type : {type}</p>
                    <p>Exp : {exp} </p>
                </div>
            </>
        )
    }
}

export default Right
