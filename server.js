require('dotenv').config();
const express = require('express')
const app = express()
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/uploads', express.static('uploads'));

app.use('/api', require('./router/imageRoutes'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})