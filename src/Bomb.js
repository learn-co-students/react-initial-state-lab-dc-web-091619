// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        let secondsLeft = this.state.secondsLeft;
        return(
            <div>
    {secondsLeft === 0 ? `Boom!` : `${secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

export default Bomb