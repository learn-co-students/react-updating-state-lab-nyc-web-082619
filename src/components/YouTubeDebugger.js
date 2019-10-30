import React, {Component} from 'react';

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    handleBitrate = () => {
        this.setState({...this.state, settings: {...this.state.settings, bitrate: 12}})
    }

    handleResolution = () => {
        this.setState({...this.state, settings: {...this.state.settings, video: {resolution: '720p'}}})
    }

    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>Change bitrate</button>
                <button className="resolution" onClick={this.handleResolution}>Change resolution</button>
            </div>            
        )
    }   

}

export default YouTubeDebugger