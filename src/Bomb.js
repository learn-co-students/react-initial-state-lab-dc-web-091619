import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  countdown = () => {
    const newSecondsLeft = this.state.secondsLeft - 1
    this.setState( {
      secondsLeft: newSecondsLeft
    } )
  }

  render() {
    if ( this.state.secondsLeft === 0 ) {
      return (
        <div>Boom!</div>
      )
    } else {
      return (
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }
  }
}

export default Bomb