const express = require('express')

const server=express()

const logic=require('./service/logic')

const cors =require('cors')

//connect with frontend
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

server.listen(8000,()=>{
    console.log("server started at port 8000");
})


server.post('/register', (req, res) => {
    logic.register(req.body.uname, req.body.email, req.body.password).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/login', (req, res) => {
    logic.login(req.body.email, req.body.password).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.get('/getAllTour',(req,res)=>{
    logic.allTour().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getOneTour/:id',(req,res)=>{
    logic.getOneTour(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/booking', (req, res) => {
    logic.booking(req.body.email, req.body.tourData).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/bookedData', (req, res) => {
    logic.bookedData(req.body.email).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/reviews', (req, res) => {
    logic.reviews(req.body.id, req.body.reviewData).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/cancelTour',(req, res) => {
    logic.cancelTour(req.body.email,req.body.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})