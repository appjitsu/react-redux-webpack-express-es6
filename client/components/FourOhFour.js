import React, { Component } from 'react'
import { Link } from 'react-router'

export default class FourOhFour extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>UH OH!</h1>
        <p>The page you tried to reach is not available.</p>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    )
  }
}
