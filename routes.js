
const routes = require('./routes/routes');

const express = require('express');
const cors = require('cors');
const router = express.Router()

app.use('/api', routes)

app.use(cors());

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})
//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
module.exports = router;