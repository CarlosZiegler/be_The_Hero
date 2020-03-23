const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
     name: 'Carlos RIcardo Ziegler',
     age: 35
    })
})

app.listen(3333)
