import React, { Component } from 'react'
import Ninja from './Ninja'
import AddNinja from './AddNinja'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ninjas: []
    }
  }

  addNinja = (ninja) => {
    const ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    const ninjas = [...this.state.ninjas]
    ninjas[id] = null
    this.setState({
      ninjas: ninjas.filter((n) => n !== null)
    })

  }

  render () {
    return (
      <div className='react-ninja'>
        <div>Hello Ninja</div>
        <Ninja deleteNinja={this.deleteNinja}
               ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App
