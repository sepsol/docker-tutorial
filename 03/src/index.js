const express = require('express');

const port = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Docker!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
