import { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        username:"user",
    }
  render() {
    return (
      <div>
        <Child name = {this.state.username} />
      </div>
    )
  }
}
