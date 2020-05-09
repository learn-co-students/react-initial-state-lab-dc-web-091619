import React from "react"

export default class ImageSlide extends React.Component{

    constructor(){
        super()
        //do I need this?
        this.state = {
            currentSlideIndex: 0
        }
    }

    render(){
        return `I am on slide ${this.state.currentSlideIndex}`
    }

}