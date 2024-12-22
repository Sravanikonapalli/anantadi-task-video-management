import React from 'react';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  return (
    <div>
      <h1>Video Management App</h1>
      <VideoList />
      <VideoPlayer video={{ title: 'Example Video', _id: 'example-id' }} />
    </div>
  );
};

export default App;
