const express = require('express');
const cors = require('cors');
const dataController = require('./dataController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/data', dataController.getData);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});