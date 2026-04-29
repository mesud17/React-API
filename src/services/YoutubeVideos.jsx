
import { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&type=video&key=${import.meta.env.VITE_API_KEY}`
        );

        const data = await response.json();

        setVideos(data.items);

        console.log(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="youtube-container">
      <h1 className="youtube-heading">Latest YouTube Videos</h1>

      <div className="videos-grid">
        {videos?.map((video) => (
          <div className="video-card" key={video.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
            <img
              className="video-thumbnail"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            </a>

            <div className="video-content">
              <h2 className="video-title">
                {video.snippet.title}
              </h2>

              <p className="video-description">
                {video.snippet.description}
              </p>

              <p className="video-date">
                Published:
                {" "}
                {new Date(
                  video.snippet.publishTime
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeVideos;