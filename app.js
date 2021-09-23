const express = require('express');
const app = express();

app.listen(8080, function() {
  console.log('listening on 8080')
})

app.get('/', (req, res) => {
  res.sendFile('./index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
