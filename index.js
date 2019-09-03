const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello world from Madhav!'))

app.listen(port, () => console.log('SongVis is listening on port ${port}!'))