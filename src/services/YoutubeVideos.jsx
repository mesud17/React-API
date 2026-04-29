import { useState, useEffect } from 'react'

function YoutubeVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&type=video&key=${import.meta.env.VITE_API_KEY}`
        )

        const data = await response.json()

        setVideos(data.items)

        console.log(data.items)
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }

    fetchVideos()
  }, [])

  return (
    <>
      <h1>YouTube Videos</h1>

      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>

          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
      ))}
    </>
  )
}

export default YoutubeVideos