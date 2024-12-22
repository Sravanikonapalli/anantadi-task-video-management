import React from 'react';

const VideoList = ({ videos, searchTerm }) => {
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredVideos.map((video) => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <VideoPlayer video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
