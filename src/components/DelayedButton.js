// Code DelayedButton Component Here

import React from 'react'
import PropTypes from 'prop-types'

class DelayedButton extends React.Component {

  constructor(){
    super()
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render(){
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}

export default DelayedButton
