const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(process.env.MONGODB_DBNAME);

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/clientes', (req, res) => {
    db.collection('clientes').find().limit(3).toArray((err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(result);
    });
  });

  app.get('/productos', (req, res) => {
    db.collection('productos').find().limit(3).toArray((err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(result);
    });
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
