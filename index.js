const express = require('express')
const main = require('./routes/main')

const app = express()

app.use('/', main)

app.listen(process.env.PORT || 3000, () => {
    console.log("###########################################")
    console.log("SERVIDOR INICIADO...")
    console.log("###########################################")
})