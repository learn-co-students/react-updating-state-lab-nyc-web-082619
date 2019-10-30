// Code YouTubeDebugger Component Here
import React from 'react'

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
        this.setState(prevState => ({
            settings: {
                ...prevState.settings, bitrate: 12
            }
        }), () => console.log("hi", this.state.settings.bitrate))
    }

    handleResolution = () => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                video: {
                    ...prevState.settings.video,
                    resolution: '720p'
                }
            }
        }))
        console.log(this.state)
        console.log(this.state.settings.video.resolution)
    }

    render() {
        return(
          <div>  
            <button className='bitrate' onClick={this.handleBitrate}>Bitrate</button>
            <button className='resolution' onClick={this.handleResolution}>Resolution</button>
          </div>  
        )
    }





}

export default YouTubeDebugger