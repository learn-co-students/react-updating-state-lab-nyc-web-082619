// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(prevState=> 
            ({timesClicked: prevState.timesClicked+1})
        )
            console.log(this.state.timesClicked)
    }

    render () {
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }




}//end of DigitalClicker

export default DigitalClicker