const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/clueso-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const feedbackSchema = new mongoose.Schema({
  userId: String,
  content: String,
  timestamp: Date,
  url: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/api/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(201).send(feedback);
});

app.get('/api/feedback', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.send(feedbacks);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
