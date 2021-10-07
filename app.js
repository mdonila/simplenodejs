const express = require('express');
const app = express();


const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
};

mdoules.exports = config;

app.listen(8080, function() {
  console.log('listening on 8080')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
