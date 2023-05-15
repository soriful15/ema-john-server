const express = require('express')
const app = express()
const port =process.env.PORT || 5000
const cors=require('cors')


// middleware
app.use(cors());
app.use(express.json())
require('dotenv').config()



app.get('/', (req, res) => {
  res.send('john is busy shopping')
})

app.listen(port, () => {
  console.log(`ema john server is running  on port ${port}`)
})