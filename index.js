require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello from MERN stack backend!');
  });

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

