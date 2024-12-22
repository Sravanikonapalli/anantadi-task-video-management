const VideoPlayer = ({ video }) => {
    return (
      <div>
        <h1>{video.title}</h1>
        <video controls>
          <source src={`http://localhost:8080/videos/${video._id}/file`} type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;
  