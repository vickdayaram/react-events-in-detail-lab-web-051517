// Code CoordinatesButton Component Here

import React from 'react'
import PropTypes from 'prop-types'

class CoordinatesButton extends React.Component {

  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render(){
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}


export default CoordinatesButton
