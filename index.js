require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
const routes = require('./roots/routes');

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors());


app.use(express.json());

database.on('error', (error) => {
    console.log(error)
})
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})