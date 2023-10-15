const express = require('express')
const app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.listen(port,()=>{
    console.log(`api running @ ${port}`)
})