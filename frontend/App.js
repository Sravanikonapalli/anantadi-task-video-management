import React, { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Searchbar from './components/Searchbar';
// import { fetchVideos } from './utils/api';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchVideos().then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <h1>Video Management</h1>
      <Searchbar setSearchTerm={setSearchTerm} />
      <VideoList videos={videos} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
