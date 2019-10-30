// Code YouTubeDebugger Component Here
import React from 'react'
export default class YoutubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
    
    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        console.log(this.state)
        return (
        <div>
            <button onClick={this.changeBitrate} className="bitrate">Bitrate</button>
            <button onClick={this.changeResolution} className="resolution">Resolution</button>
        </div>
        )
    }
}