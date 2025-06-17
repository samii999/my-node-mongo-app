const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const uri = 'mongodb://localhost:27017';

app.get('/', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('testdb');
    res.send('Connected to MongoDB!');
  } catch (e) {
    console.error(e);
    res.send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

// Bind to 0.0.0.0 so it's publicly accessible
app.listen(port, '0.0.0.0', () => {
  console.log(`App running on http://0.0.0.0:${port}`);
});
