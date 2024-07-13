const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
 res.send('Twiiter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>HELLO WORLD</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>Backend Learning Process in Progress</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})