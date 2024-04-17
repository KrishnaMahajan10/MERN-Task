// server/routes/sampleData.js
const express = require('express');
const router = express.Router();
const SampleData = require('../models/SampleData');
const fs = require('fs');

router.post('/import', async (req, res) => {
  try {
    const { filename } = req.body;
    const rawData = fs.readFileSync(filename);
    const data = JSON.parse(rawData);
    await SampleData.insertMany(data);
    res.status(201).send('Data imported successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await SampleData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
