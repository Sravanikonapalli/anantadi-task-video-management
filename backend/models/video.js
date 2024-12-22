const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  file: Buffer,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
