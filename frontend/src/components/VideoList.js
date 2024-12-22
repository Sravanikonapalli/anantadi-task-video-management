import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar'
const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <SearchBar/>
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map(video => (
          <li key={video._id}>{video.title}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default VideoList;

