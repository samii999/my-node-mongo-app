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
    res.send('Error connecting to MongoDB');
  } finally {
    await client.close();
  }
});

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
