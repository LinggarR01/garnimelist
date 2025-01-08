"use client"

import Youtube from 'react-youtube'

const VideoPlayer = ({ youtubeID}) => {
    const option = {
        width: "200",
        height: "200",
    }
    return (
    <div>
        <Youtube
          videoId={youtubeID} // Youtube Video ID
          onReady={(event) => event.target.pauseVideo()} 
          opts={{options: option}}
        />
    </div>
  )
}

export default VideoPlayer