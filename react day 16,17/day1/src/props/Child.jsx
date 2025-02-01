import  { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        Child
        <h2>coming from parent component --:{ this.props.name }</h2>
      </div>
    )
  }
}
