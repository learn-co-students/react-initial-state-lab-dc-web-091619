import React from 'react';


export default class Bomb extends React.Component {

    state = {secondsLeft: this.props.initialCount}

    render() {
        return (this.secondsGuy());
    };

    secondsGuy() {
        if (this.state.secondsLeft !== 0) {
        return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    } else {
        return <div>Boom!</div>
    }
    }
}
