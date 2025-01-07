"use client"

import Youtube from 'react-youtube'

const VideoPlayer = ({ youtubeID}) => {
    const option = {
        width: "300",
        height: "200",
    }
    return (
    <div className='fixed bottom-0 right-0'>
        <Youtube
          videoId={youtubeID} // Youtube Video ID
          onReady={(event) => event.target.pauseVideo()} 
          opts={{options: option}}
        />
    </div>
  )
}

export default VideoPlayer