// server/models/SampleData.js
const mongoose = require('mongoose');

const SampleDataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('SampleData', SampleDataSchema);
