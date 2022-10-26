const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const corses = require('./data/course.json')

app.get('/', (req, res) => [
    res.send('api Running')
])

app.get('/courses-data', (req, res) => {
    res.send(corses)
})

app.listen(port, () => {
    console.log('server is running on port', port);
})

module.exports = app;