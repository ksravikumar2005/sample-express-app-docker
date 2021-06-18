const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World to our Techy Friday! and Happy Weekend!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

