const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const Cardroute = require('./Routes/Card.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.get('/', async (req,res,next)=>{
    res.send("Hello from Express")
})
app.use('/api', Cardroute)

app.use(async (req,res,next)=>{
    next(createError.NotFound())
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status:err.status || 500,
            message: err.message,
        },
    }) 
})

const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})