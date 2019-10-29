import React, { Component } from 'react';

class DigitalClicker extends React.Component {

    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    // increment = () => {
    //     let newCount = this.state.timesClicked + 1
    //     this.setState({
    //         timesClicked: newCount
    //     })
    // }

    render() {
        return (
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }

}

export default DigitalClicker
