import React, { Component } from 'react'
import '../stylesheets/main'

export default class AppContainer extends Component {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}
