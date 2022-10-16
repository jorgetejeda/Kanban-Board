const express = require('express')
const app = express()

const http = require('http').Server(app)
const cors = require('cors')

const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/api', (req, res)=>{
  res.json({
    message: "I'm Working"
  })
})


app.listen(PORT, ()=>{
  console.log(`Listen on port ${PORT}`)
})