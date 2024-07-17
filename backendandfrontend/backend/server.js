import express from 'express'
// const express=require('express')
import dotenv from 'dotenv'



// require('dotenv').config();
dotenv.config()
const app=express();
const port=process.env.PORT||3000;
const jokes=[
    {
        id:1,
        title:'First joke',
        content:'This is the joke'
    },
    {
        id:2,
        title:'Second joke',
        content:'This is the second joke'
    },
    {
        id:3,
        title:'Third joke',
        content:'This is the third joke'
    },
    {
        id:4,
        title:'Forth joke',
        content:'This is the fourth joke'
    },
    {
        id:5,
        title:'Five joke',
        content:"This is the fifth joke"
    }
]
// app.use(express.static('dist'))
app.get('/',(req,res)=>{
res.send('server is ready');
})
app.get('/api/jokes',(req,res)=>{
   
        res.send(jokes)

    
})
app.listen(port,()=>{
 console.log(`Server is hosted at localhost:${port}`)
})