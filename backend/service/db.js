const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/travel')

const User=mongoose.model('User',{
    username:String, 
    email:String,
    password:String,    
    bookings:[]
})

const Tour=mongoose.model('Tour',{
    id:Number,
    title:String,
    city:String,
    address:String,
    distance:String,
    price:String,
    maxGroupSize:String,
    desc:String,
    reviews:[],
    avgRating:String,
    photo:String
})

module.exports={
    User,Tour
}