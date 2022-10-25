const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const categories = require('./data/course.json')

app.get('/', (req, res) => [
    res.send('api Running')
])

app.get('/courses-data', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('server is running on port', port);
})

module.exports = app;