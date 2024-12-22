const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/videos', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const videoRoutes = require('./routes/videos');
app.use('/videos', videoRoutes);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

