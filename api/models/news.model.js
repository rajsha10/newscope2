import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,  // URL for the image
    required: true
  },
  videoLink: {
    type: String,  // URL for the YouTube video
    required: false  // Not all news posts may have a video
  },
  category: {
    type: String,  // Category of the news article
    required: true  // Assuming every article should have a category
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const News = mongoose.model('News', newsSchema);
export default News;
